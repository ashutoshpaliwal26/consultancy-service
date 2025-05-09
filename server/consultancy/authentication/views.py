import json
import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from authentication.service import create_user, login_user
from authentication.models import User
from token import *


# Create your views here.
@csrf_exempt
@api_view(['POST'])
def home(request):
    res = create_user(name=request.data["name"], email=request.data["email"], password=request.data["password"],
                      otp=random.randint(1000, 9999))
    if res['status'] == 200:
        return JsonResponse(res, status=res['status'])
    return JsonResponse(res, status=res['status'])

@api_view(['POST'])
def login(request):
    email = request.data["email"]
    password = request.data["password"]
    res = login_user(email, password)
    print(res)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else :
        return JsonResponse(res, status=res['status'])