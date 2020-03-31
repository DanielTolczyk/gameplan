from django.db import models

# Create your models here.
class Game(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    player_count = models.CharField(max_length=20)
    length = models.CharField(max_length=20)

    def __str__(self):
        return self.name