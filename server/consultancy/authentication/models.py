from importlib.metadata import requires

from django.db import models
from enum import Enum

class UserRole(Enum):
    ADMIN = "admin"
    USER = "user"
    CONSULTANT = "consultant"

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
    role = models.CharField(
        max_length=20,
        choices=[(role.value, role.name.title()) for role in UserRole],
        default=UserRole.USER.value
    )
    bio = models.TextField(blank=True)
    company = models.CharField(max_length=100, default="")
    phone = models.CharField(max_length=100, default="")
    date_of_birth = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=1000, default="")
    place_of_birth = models.CharField(max_length=100, default="")
    time_of_birth = models.TimeField(null=True , blank=True)
