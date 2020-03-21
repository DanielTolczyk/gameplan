from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Games(models.Model):
    name = models.CharField()
    description = models.TextField()
    
