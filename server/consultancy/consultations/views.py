from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view

from consultations.service import create_consultation


# Create your views here.
@csrf_exempt
@api_view(['POST'])
def create(request):
    title = request.data.get('title')
    email = request.data.get('email')
    status = request.data.get('status')
    on_date = request.data.get('on_date')
    final_time = request.data.get('final_time')
    initial_time = request.data.get('initial_time')
    description = request.data.get('description')
    print(title, email, status, on_date, final_time, initial_time, description)
    res = create_consultation(title=title, email=email, status=status, on_date=on_date, final_time=final_time, initial_time=initial_time, description=description)
    if res['status'] == 200:
        return JsonResponse(res, status=200)
    return JsonResponse(res, status=res['status'])