# views.py

from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from join.models import BoardItem, CustomUser
from join.serializers import BoardItemSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import status

class BoardView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        todos = BoardItem.objects.all()
        serializer = BoardItemSerializer(todos, many=True)
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        # Benutzer authentifizieren
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Token für den authentifizierten Benutzer generieren
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)

class SignUpView(APIView):
    def post(self, request):
        print("Request data signup:", request.data)
        
        # Extrahiere Daten aus der Anfrage
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        # Überprüfe, ob alle erforderlichen Felder vorhanden sind
        if not username or not email or not password:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        # Benutzer erstellen
        try:
            user = CustomUser.objects.create_user(
                username=username,
                email=email,
                password=password
            )
            
            # Wenn Benutzer erfolgreich erstellt wird, antworte mit Erfolg
            if user:
                return Response({'answer': 'New User signed up successfully'}, status=status.HTTP_201_CREATED)

        except Exception as e:
            # Allgemeiner Fehlerfang, um spezifischere Fehler zu behandeln
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        
        # Fallback-Antwort, falls Benutzer nicht erstellt werden konnte
        return Response({'error': 'User could not be created'}, status=status.HTTP_400_BAD_REQUEST)
