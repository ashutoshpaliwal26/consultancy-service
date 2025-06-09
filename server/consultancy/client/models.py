from django.db import models
from consultations.models import Consultation
from authentication.models import User

class Client(models.Model):
    consultations = models.ForeignKey(Consultation, on_delete=models.CASCADE)
    clients = models.ManyToManyField(User, related_name="clients")

    class Meta:
        verbose_name = "Client"
        verbose_name_plural = "Clients"
        ordering = ['consultations']
