from rest_framework import serializers
from join.models import BoardItem
from django.contrib.auth import authenticate
from django.contrib.auth import get_user_model

class BoardItemSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = BoardItem
        fields = ['id', 'title', 'description','username', 'created_at', 'checked','assignedTo']