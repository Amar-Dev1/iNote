from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NotesAPIView.as_view()),
    path("notes/<int:pk>", views.SingleNoteAPIView.as_view()),
    path('notes/favorites',views.FavoriteNotesAPIView.as_view()),
]
