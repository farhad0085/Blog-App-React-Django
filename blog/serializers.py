from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Post, UserProfile
from django.contrib.auth.models import User


class UserProfileSerializer(ModelSerializer):
    """Serializer for user profile model"""

    class Meta:
        model = UserProfile
        fields = '__all__'

class UserSerializer(ModelSerializer):
    """Serializer for user model"""
    
    profile = UserProfileSerializer()
    class Meta:
        model = User
        exclude = ['password', 'groups', 'user_permissions']
        read_only_fields = ['last_login', 'is_superuser', 'username', 'is_staff', 'is_active', 'date_joined']


class PostSerializer(ModelSerializer):
    """Serializer for post when this is list call"""
    
    excerpt = SerializerMethodField('get_excerpt')
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def get_excerpt(self, obj):
        return obj.get_excerpt()
    