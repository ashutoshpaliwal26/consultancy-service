from django.urls import path

from consultations.views import create, get_consultations_by_user_id, delete_consultations_by_user_id

urlpatterns = [
    path('create', create, name='home'),
    path('<slug:id>', get_consultations_by_user_id, name="get-consultation"),
    path('delete/<slug:id>', delete_consultations_by_user_id, name="delete-consultation"),

]