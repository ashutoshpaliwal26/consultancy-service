import random

from django.core.serializers import serialize

from authentication.mailservice import MailService
from authentication.models import User
from authentication.serializer import ModelSerializer
from authentication.token import JwtService
from django.contrib.auth.hashers import make_password, check_password

otp_gen = lambda: random.randint(10000, 99999)
jwt_service = JwtService()


def check_user(email):
    if not User.objects.filter(email=email).exists():
        return False
    else:
        return True


def create_user(name, otp, email, password, role):
    if check_user(email):
        return {'message': 'User Already Exists Need to LogIn', 'success': False, 'status': 400}
    else:
        hash_password = make_password(str(password))

        user = User(name=name, email=email, password=hash_password, otp=otp, role=role)
        send = verify_mail(email=user.email, otp=user.otp)
        print("The Mail Service Response : ", send['message'])
        user.save()
        token = jwt_service.set_token(user)
        serializer = ModelSerializer(user)
        return {'message': 'User Created', 'success': True, 'user': serializer.data, 'token': token, 'status': 200}


def login_user(email, password):
    if check_user(email):
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            token = jwt_service.set_token(user)
            serializer = ModelSerializer(user)
            return {'message': 'User LogIn Successfully', 'success': True, 'token': token, 'status': 200,
                    'user': serializer.data}
        else:
            return {'message': 'Incorrect Password', 'success': False, 'status': 400}
    else:
        return {'message': 'User Not Found', 'success': False, 'status': 404}


def verify_mail(email, otp):
    mail_service = MailService()
    content = f"Verification Code for Service is : {otp}"
    subject = "Verification Code for Service"
    return mail_service.sendMail(send_to=email, subject=subject, content=content)


def verify_user(email, otp):
    user = User.objects.get(email=email)
    print('otp : ', user.otp == int(otp))
    if user.otp == int(otp):
        user.verified = True
        user.save()
        return {
            'success': True,
            'message': 'User Verified',
            'status': 200
        }
    else:
        return {
            'success': False,
            'message': 'User Not Verified',
            'status': 400
        }

def get_all_user():
    users = User.objects.all()
    serializer = ModelSerializer(users, many=True)
    return serializer.data

def get_user_by_email(email):
    user = User.objects.get(email=email)
    if not user :
        return {
            'message': 'User Not Found',
            'success': False,
            'status': 404
        }
    serializer = ModelSerializer(user)
    return {
        'message' : 'User Found',
        'success': True,
        'user': serializer.data,
        'status' : 200
    }

def update_user_data(name, email, bio, company, phone_no):

    user = User.objects.get(email=email)
    if not user:
        return {
            'status' : 400,
            'success' : False,
            'message' : "User Not Found"
        }

    user.name = name
    user.email = email
    user.phone = phone_no
    user.company = company
    user.bio = bio
    user.save()
    serializer = ModelSerializer(user)
    return {
        'status' : 200,
        'success' : True,
        'message' : 'User Updated',
        'user': serializer.data,
    }

def change_password(email, current_password, new_password):
    user = User.objects.get(email=email)
    if not user:
        return {
            'status' : 400,
            'success' : False,
            'message' : "User Not Found"
        }
    if check_password(current_password, user.password):
        user.password = make_password(new_password)
        user.save()
        return {
            'status' : 200,
            'success' : True,
            'message' : 'Password Updated',
        }
    else :
        return {
            'status' : 400,
            'success' : False,
            'message' : "Incorrect Password"
        }

