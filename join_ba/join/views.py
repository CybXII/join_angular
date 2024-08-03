from django.shortcuts import render
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from join.models import BoardItem
from join.serializers import BoardItemSerializer
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework import status
from django.contrib.auth import get_user_model
UserModel = get_user_model() 

class BoardView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
        todos = BoardItem.objects.all()
        serializer = BoardItemSerializer(todos, many=True,)
        return Response(serializer.data)

# Create your views here.
class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        # Versuche, den Benutzer zu authentifizieren
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Token für den authentifizierten Benutzer generieren
            token, created = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)
    