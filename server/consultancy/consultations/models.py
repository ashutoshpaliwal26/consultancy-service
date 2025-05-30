from django.db import models
from authentication.models import User
from enum import Enum

class ConsultationsStatus(Enum):
    COMPLETE = "complete"
    PENDING = "pending"
    UPCOMING = "upcoming"

# Create your models here.
class Consultation(models.Model):
    title = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=[(status.value, status.name.title()) for status in ConsultationsStatus],
        default=ConsultationsStatus.UPCOMING.value,
    )
    initial_time = models.DateTimeField()
    final_time = models.DateTimeField()
    on_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)