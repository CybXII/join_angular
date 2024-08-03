from rest_framework import serializers
from join.models import BoardItem
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

class EmailAuthTokenSerializer(serializers.Serializer):
    email = serializers.EmailField(
        label="Email",
        write_only=True
    )
    password = serializers.CharField(
        label="Password",
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        label="Token",
        read_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            # Hier authentifizieren wir den Benutzer anhand der E-Mail und des Passworts
            user = authenticate(request=self.context.get('request'),
                                username=email, password=password)

            if not user:
                msg = 'Zugangsdaten sind ungültig oder Konto existiert nicht.'
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = 'Beide Felder, E-Mail und Passwort, müssen ausgefüllt werden.'
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs

class BoardItemSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = BoardItem
        fields = ['id', 'title', 'description','username', 'created_at', 'checked','assignedTo']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = '__all__'