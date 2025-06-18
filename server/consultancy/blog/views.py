from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes
from blog.service import create_new_blog, find_user, list_all_blogs, delete_blog_by_id, get_blog_by_id
from django.http import JsonResponse
from rest_framework.parsers import MultiPartParser, FormParser


@csrf_exempt
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def create_blog(request):
    image = request.data['image']
    user_id = request.data['user_id']
    title = request.data['title']
    description = request.data['description']
    user = find_user(user_id=user_id)
    return create_new_blog(user, title=title, description=description, image=image)

@api_view(['GET'])
def get_all_blogs(request):
    return list_all_blogs()

@api_view(["DELETE"])
def delete_blog(request, blog_id):
    user = find_user(request.data['user_id'])
    return delete_blog_by_id(blog_id=blog_id,user=user)

@api_view(["GET"])
def get_one_blog(request, blog_id):
    return get_blog_by_id(blog_id=blog_id)