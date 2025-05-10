import random

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


def create_user(name, otp, email, password):
    if check_user(email):
        return {'message': 'User Already Exists Need to LogIn', 'success': False, 'status': 400}
    else:
        hash_password = make_password(str(password))

        user = User(name=name, email=email, password=hash_password, otp=otp)
        send = verify_mail(email=user.email, otp=user.otp)
        print("The Mail Service Response : ", send['message'])
        user.save()
        token = jwt_service.set_token({
            'email': user.email,
            'name': user.name,
        })
        serializer = ModelSerializer(user)
        return {'message': 'User Created', 'success': True, 'user': serializer.data, 'token': token, 'status': 200}


def login_user(email, password):
    if check_user(email):
        user = User.objects.get(email=email)
        if check_password(password, user.password):
            token = jwt_service.set_token({
                'email': user.email,
                'name': user.name,
            })
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
