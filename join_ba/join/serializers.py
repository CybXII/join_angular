from rest_framework import serializers
from join.models import BoardItem

class BoardItemSerializer(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='author.username')

    class Meta:
        model = BoardItem
        fields = ['id', 'title', 'username', 'created_at', 'checked']