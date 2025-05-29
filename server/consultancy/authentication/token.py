import jwt
import os

from rest_framework_simplejwt.tokens import RefreshToken


class JwtService:
    def __init__(self):
        self.secret_key = os.getenv('JWT_SECRET_KEY')

    def set_token(self, user):
        refresh = RefreshToken.for_user(user)

        return {
            'access_token': str(refresh.access_token),
            'refresh' : str(refresh),
        }
