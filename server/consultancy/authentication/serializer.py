from rest_framework import serializers
from authentication.models import User

User = User()

class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'verified', 'role', 'created_at', 'updated_at', 'company', 'phone', 'bio', 'address', 'date_of_birth', 'place_of_birth', "time_of_birth"]
        extra_kwargs = {'password': {'write_only': True}}

