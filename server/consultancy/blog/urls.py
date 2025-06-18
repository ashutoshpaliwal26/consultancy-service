from django.urls import path
from blog.views import create_blog, get_all_blogs, delete_blog, get_one_blog

urlpatterns = [
    path('create/', create_blog, name='create_blog'),
    path('', get_all_blogs, name='get_all_blogs'),
    # path('update/<int:blog_id>/', update_blog, name='update_blog'),
    path('delete/<int:blog_id>/', delete_blog, name='delete_blog'),
    path('list/<int:blog_id>', get_one_blog, name='get_blog_by_id')
]