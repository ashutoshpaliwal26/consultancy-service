from os import name

from authentication.views import home, login, verify, protect, get_all_user_data, get_user, update_user, change_pass
from django.urls import path

urlpatterns = [
    path('signup', home, name='home'),
    path('login', login, name='login'),
    path('verify', verify, name='verify'),
    path('protect', protect, name='protect'),
    path('get_all_users', get_all_user_data, name='get_all_users'),
    path('get_user', get_user, name="get_user"), #Get User By email in body
    path("update_user", update_user, name="update_user"),
    path("change_password", change_pass, name="change_password"),
]