from rest_framework import serializers
from authentication.models import User
from .models import BlogPost, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'role']


class CommentSerializer(serializers.ModelSerializer):
    commented_by = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'blog', 'commented_by', 'text', 'created_at']


class BlogPostSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'description', 'image', 'created_by', 'created_at', 'updated_at', 'comments']
