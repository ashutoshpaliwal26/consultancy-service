from rest_framework import serializers

from consultations.models import Consultation


class ModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultation
        fields = "__all__"
        extra_kwargs = {'created_by': {'read_only': True}}