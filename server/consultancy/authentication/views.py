import json
import random

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from authentication.protect import check_token
from authentication.service import create_user, login_user, verify_user

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
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else :
        return JsonResponse(res, status=res['status'])

@api_view(['POST'])
def verify(request):
    email = request.data["email"]
    otp = request.data["otp"]
    res = verify_user(email=email, otp=otp)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else : return JsonResponse(res, status=res['status'])

# @api_view(['GET'])
def protect(request):
    auth_header = request.headers.get('Authorization')
    if auth_header and auth_header.startswith('Bearer'):
        token = auth_header.split(' ')[1]
        print("The Headers ==== ", token)
        res = check_token(token)
        if res['status'] == 200:
            return JsonResponse(res, status=200)
        else:
            return JsonResponse(res, status=res['status'])

    return JsonResponse({
        'success' : False,
        'status' : 404,
        'message' : 'Header not found.'
    })
