import json
import random

from django.contrib.auth.hashers import make_password
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from authentication.protect import check_token
from authentication.service import create_user, login_user, verify_user, get_all_user, get_user_by_email, \
    update_user_data, change_password


# Create your views here.
@csrf_exempt
@api_view(['POST'])
def home(request):
    res = create_user(name=request.data["name"], email=request.data["email"], password=request.data["password"],
                      otp=random.randint(1000, 9999), role=request.data['role'], place_of_birth=request.data["place_of_birth"], time_of_birth=request.data['time_of_birth'], address=request.data["address"])
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

def get_all_user_data(request):
    get_all_user()
    return JsonResponse({
        'success' : True
    })

@api_view(['POST'])
def get_user(request):
    email = request.data["email"]
    res = get_user_by_email(email=email)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else:
        return JsonResponse(res, status=res['status'])

@api_view(['POST'])
def update_user(request):
    name = request.data["name"]
    email = request.data["email"]
    phone = request.data["phone"]
    company = request.data["company"]
    bio = request.data['bio']
    date_of_birth = request.data['date_of_birth']
    address = request.data['address']
    time_of_birth = request.data['time_of_birth']
    place_of_birth = request.data['place_of_birth']
    res = update_user_data(name=name, email=email, phone_no=phone, company=company, bio=bio, date_of_birth=date_of_birth, address=address, place_of_birth=place_of_birth, time_of_birth=time_of_birth)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else:
        return JsonResponse(res, status=res['status'])


@api_view(['POST'])
def change_pass(request):
    email = request.data['email']
    current_password = request.data["current_password"]
    new_password = request.data["new_password"]
    res = change_password(email=email, current_password=current_password, new_password=new_password)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    else:
        return JsonResponse(res, status=res['status'])