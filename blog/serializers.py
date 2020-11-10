from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Post
from django.contrib.auth.models import User


class UserSerializer(ModelSerializer):
    """Serializer for user model"""

    class Meta:
        model = User
        exclude = ['password', 'groups', 'user_permissions']


class PostSerializer(ModelSerializer):
    """Serializer for post when this is list call"""
    
    excerpt = SerializerMethodField('get_excerpt')
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def get_excerpt(self, obj):
        return obj.get_excerpt()
    