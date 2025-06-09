from client.models import Client
from client.serializer import ClientSerializer
from authentication.serializer import ModelSerializer
from consultations.models import Consultation
from authentication.models import User

def create_client_model(client_id, user_id):
    consultation = Consultation.objects.filter(id=client_id).first()
    user = User.objects.filter(id=user_id).first()

    print({
        'consultation': consultation,
        'user': user,
    })

    if not consultation or not user:
        return {
            'success': False,
            'status_code': 404,
            'message': 'Consultation or User not found',
            'data': None
        }

    # Get or create a Client for this consultation
    client, created = Client.objects.get_or_create(consultations=consultation)


    # Add the user to the ManyToMany clients field
    client.clients.add(user)

    serialize = ClientSerializer(client)

    return {
        'success': True,
        'data': serialize.data,
        'status_code': 201 if created else 200,
        'message': 'Client created' if created else 'User added to client'
    }


def list_clients(consultations_id):
    print("GET IN")
    client = Client.objects.filter(id=consultations_id)
    serialize = ClientSerializer(client, many=True)
    user_set = []
    client = serialize.data[0]['clients']
    for client in client:
        user = User.objects.filter(id=client).first()
        user_serializer = ModelSerializer(user)
        user_set.append(user_serializer.data)

    if not client:
        return {
            'success': False,
            'status_code': 404,
            'message': 'Consultation not found',
            'data': None
        }
    return {
        'success': True,
        'main_data': serialize.data,
        'data': user_set,
        'status_code': 200,
        'message': 'Client list'
    }