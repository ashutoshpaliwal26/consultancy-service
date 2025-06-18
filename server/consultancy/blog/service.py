from authentication.models import User
from authentication.service import get_user_by_id
from authentication.serializer import ModelSerializer
from blog.models import BlogPost
from blog.serializer import BlogPostSerializer
from django.http import JsonResponse

def find_user(user_id):
    user = get_user_by_id(user_id=user_id)
    serializer = ModelSerializer(user)
    if not user:
        return False
    # print({'data' : serializer.data['role']})
    if serializer.data['role'] == 'admin':
        return user
    return False

def check_for_blog(title):
    blog = BlogPost.objects.filter(title = title)
    if blog.exists():
        return True
    else:
        return False

def json_response(success : bool, status , message : str, data: any):
    return JsonResponse({
        'success' : success,
        'status' : status,
        'message' : message,
        'data' : data
    }, status=status)

def create_new_blog(user, title, description, image):
    if check_for_blog(title=title):
        return json_response(success=False, status=400, message="Blog already exists", data={})

    if not user:
        return json_response(success=False, status=400, message='User not found', data={})
    
    blog = BlogPost(title=title, description=description, created_by=user, image=image)
    blog.save()
    
    serializer = BlogPostSerializer(blog)
    return json_response(success=True, status=200, message="Created successfully", data=serializer.data)

def list_all_blogs():
    blog = BlogPost.objects.all()
    blog_serialize = BlogPostSerializer(blog, many=True)
    return json_response(success=True, status=200, message="All Blogs", data=blog_serialize.data)


def delete_blog_by_id(user, blog_id):
    try:    
        blog = BlogPost.objects.get(id = blog_id)
    except BlogPost.DoesNotExist:
        return json_response(False, 404, "Blog Not Found", data={})
    
    user_id = user.id
    blog_serializer = BlogPostSerializer(blog)
    created_by_id = blog_serializer.data['created_by']['id']
    print("Created By id : " , created_by_id)
    if created_by_id == user_id:
        blog.delete()
        return json_response(True, 200, "Deleted Successfully", data=blog_serializer.data)
    return json_response(False, 400, "Unauthorized", data={})

def get_blog_by_id(blog_id):
    try:
        blog = BlogPost.objects.get(id = blog_id)
        blog_data = BlogPostSerializer(blog)
        return json_response(True, 200, "Blog Found", data=blog_data.data)
    except:
        return json_response(False, 404, "Blog Not Found", data={})