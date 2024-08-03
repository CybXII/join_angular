from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model


User = get_user_model()

class EmailOrUsernameModelBackend(BaseBackend):
    """
    Custom Authentication Backend to allow login with either email or username.
    """

    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Versuche, den Benutzer anhand der E-Mail zu finden
            user = User.objects.get(email=username)
        except User.DoesNotExist:
            # Wenn der Benutzer nicht gefunden wird, versuche, anhand des Benutzernamens zu finden
            try:
                user = User.objects.get(username=username)
            except User.DoesNotExist:
                return None

        # Prüfe, ob das Passwort korrekt ist
        if user.check_password(password):
            return user

        return None

    def get_user(self, user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            return None