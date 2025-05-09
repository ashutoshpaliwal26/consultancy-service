import jwt
import os

class JwtService:
    def __init__(self):
        self.secret_key = os.getenv('JWT_SECRET_KEY')

    def set_token(self, payload):
        token=jwt.encode(payload, self.secret_key, algorithm='HS256')
        return token

    def get_token(self, token):
        data=jwt.decode(token, self.secret_key, algorithms=['HS256'])
        return data

