from rest_framework import serializers
from authentication.models import User

User = User()

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email', 'verified', 'role', 'created_at', 'updated_at', 'company', 'phone', 'bio']
        extra_kwargs = {'password': {'write_only': True}}