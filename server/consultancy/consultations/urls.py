from django.urls import path

from consultations.views import  create

urlpatterns = [
    path('/create', create, name='home'),
]