from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer


class NotesAPIView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all()


class SingleNoteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.all()


class FavoriteNotesAPIView(generics.ListCreateAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(is_favorite=True)


class SingleFavoriteNoteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(is_favorite=True)
