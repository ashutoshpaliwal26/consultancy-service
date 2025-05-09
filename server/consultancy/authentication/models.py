from importlib.metadata import requires

from django.db import models

# Create your models here.
class User(models.Model):
    objects = None
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    otp = models.IntegerField()
    verified = models.BooleanField(default=False)