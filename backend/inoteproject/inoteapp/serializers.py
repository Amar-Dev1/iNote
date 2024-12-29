from rest_framework import serializers
from .models import Note


class NoteSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)

    class Meta:
        model = Note
        fields = ["id", "title", "content", "created_at", "is_favorite"]

    # def validate_title(title, self):
    #     if len(title) <= 1:
    #         raise serializers.ValidationError("title must be at least 2 characters ❗")
    #     return title
