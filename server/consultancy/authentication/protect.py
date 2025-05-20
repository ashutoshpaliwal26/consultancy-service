from authentication.service import check_user
from authentication.token import JwtService
from authentication.models import User

def check_token(token):
    jwt_service = JwtService()
    data = jwt_service.get_token(token)
    email = data['email']
    user_found = check_user(email)
    if user_found:
        return {
            'status' : 200,
            'success' : True,
        }
    else:
        return {
            'status' : 401,
            'success' : False,
        }