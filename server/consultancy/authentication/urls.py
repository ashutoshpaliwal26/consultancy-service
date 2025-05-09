from authentication.views import home, login
from django.urls import path

urlpatterns = [
    path('signup', home, name='home'),
    path('login', login, name='login')
]