from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from client.models import Client
from client.service import create_client_model, list_clients


# Create your views here.
@csrf_exempt
@api_view(['POST'])
def create(request):
    return JsonResponse({
        'success' : True
    })

@api_view(['GET'])
def list(request, consultation_id):
    try:
        res = list_clients(consultation_id)
        return JsonResponse(res, status=res['status_code'], safe=False)
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=500)

@api_view(['DELETE'])
def delete(request, clientId):
    return JsonResponse({
        'success': True
    })

@api_view(['PUT'])
def update(request, client_id):
    user_id = request.data['userId']
    create_client = create_client_model(client_id=client_id, user_id=user_id)
    return JsonResponse(create_client, status=create_client['status_code'])
