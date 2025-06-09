from django.urls import path
from client.views import create, update, delete, list

urlpatterns = [
    path("<slug:consultation_id>", list, name="list"),
    path("update/<slug:client_id>", update, name="update"),
    path("delete/<slug:clientId>", delete, name="delete"),
]