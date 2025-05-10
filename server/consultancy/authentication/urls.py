

from authentication.views import home, login, verify
from django.urls import path

urlpatterns = [
    path('signup', home, name='home'),
    path('login', login, name='login'),
    path('verify', verify, name='verify'),
]