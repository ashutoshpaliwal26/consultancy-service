from authentication.models import User
from consultations.models import Consultation
from consultations.serializer import ModelSerializer

def create_consultation(email, title, description, status, initial_time, final_time, on_date):
    user = User.objects.get(email=email)
    if not user:
        return {
            'success': False,
            'message': 'User does not exist',
            'data': None,
            'status': 404,
        }
    consultation = Consultation(title=title,created_by=user, status=status, on_date=on_date, final_time=final_time, initial_time=initial_time, description=description)
    consultation.save()
    serializer = ModelSerializer(consultation)
    return {
        'status': '200',
        'success': True,
        'message': 'Consultation created',
        'data' : serializer.data
    }

def get_consultation(id):
    consultations = Consultation.objects.filter(created_by=id)
    if not consultations:
        return {
            'success': False,
            'message': 'Consultation does not exist',
            'data': None,
            'status': 404
        }
    serializer = ModelSerializer(consultations, many=True)
    return {
        'status': 200,
        'success': True,
        'message': 'Consultation found',
        'data' : serializer.data
    }

def delete_consultations(consultations_id):
    consultation = Consultation.objects.get(id=consultations_id)
    if not consultation:
        return {
            'success': False,
            'message': 'Consultation does not exist',
            'data': None,
            'status': 404
        }
    consultation.delete()
    serializer = ModelSerializer(consultation)
    return {
        'status': 200,
        'success': True,
        'message': 'Consultation deleted',
        'data' : serializer.data
    }