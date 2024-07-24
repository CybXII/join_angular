from django.conf import settings
from django.db import models
from datetime import datetime

# Create your models here.
class BoardItem(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )
    created_at = models.DateField(default= datetime.now)
    checked = models.BooleanField(default=False)

def __str__(self):
        return f'({self.id}) {self.title} by {self.author.username}'

@property
def username(self):
        return self.author.username