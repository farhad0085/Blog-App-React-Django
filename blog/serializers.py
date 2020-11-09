from rest_framework.serializers import ModelSerializer
from .models import Post
from django.contrib.auth.models import User


class PostSerializer(ModelSerializer):
    """Serializer for post when this is list call"""
    

    class Meta:
        model = Post
        fields = '__all__'
