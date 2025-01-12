from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)

    class Meta:
        model = Note
        fields = ["user","id", "title", "content", "created_at", "is_favorite"]
        