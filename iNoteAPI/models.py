from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_favorite = models.BooleanField(default=False, db_index=True)

    def __str__(self):
        return self.title + " " + self.created_at
