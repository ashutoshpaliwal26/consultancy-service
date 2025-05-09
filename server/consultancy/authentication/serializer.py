from rest_framework import serializers
from authentication.models import User

User = User()

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email']
        extra_kwargs = {'password': {'write_only': True}}