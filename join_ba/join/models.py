from django.conf import settings
from django.db import models
from datetime import datetime
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'  # Verwende E-Mail als primäres Login-Feld
    REQUIRED_FIELDS = ['username']  # Benutzername ist ein erforderliches Feld

    def __str__(self):
        return f'{self.first_name} {self.last_name}'  # Gibt Vor- und Nachnamen zurück

class Contact(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)

class BoardItem(models.Model):
    CATEGORY_CHOICES = [
        ('technical_task', 'Technical Task'),
        ('user_story', 'User Story'),
    ]
    title = models.CharField(max_length=100)
    description = models.TextField(max_length=500, blank=True, default=None)
    category = models.CharField(
        max_length=20,
        choices=CATEGORY_CHOICES,
        blank=False,
        null=False
    )
    assignedTo = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name='assigned_boarditems',
        blank=True
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    created_at = models.DateField(default=datetime.now)
    checked = models.BooleanField(default=False)

    def __str__(self):
        # Ausgabe der zugewiesenen Benutzer mit Vor- und Nachnamen
        assigned_usernames = ', '.join(
            [f"{user.first_name} {user.last_name}" for user in self.assignedTo.all()]
        )
        return f'({self.id}) Created by {self.author.first_name} {self.author.last_name} Title: {self.title} Assigned to: {assigned_usernames}'

    @property
    def username(self):
        return self.author.username
