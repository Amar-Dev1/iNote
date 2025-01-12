from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.throttling import UserRateThrottle

class NotesAPIView(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    throttle_classes =[UserRateThrottle]
    serializer_class = NoteSerializer
    def get_queryset(self):
        return Note.objects.filter(user=self.request.user)

class SingleNoteAPIView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    throttle_classes =[UserRateThrottle]
    queryset = Note.objects.all()
    serializer_class = NoteSerializer


class FavoriteNotesAPIView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    throttle_classes =[UserRateThrottle]
    serializer_class = NoteSerializer

    def get_queryset(self):
        return Note.objects.filter(is_favorite=True,user=self.request.user)