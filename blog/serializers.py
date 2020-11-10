from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Post, UserProfile
from django.contrib.auth.models import User


class UserProfileSerializer(ModelSerializer):
    """Serializer for user profile model"""

    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ['user']

class UserSerializer(ModelSerializer):
    """Serializer for user model"""
    
    profile = UserProfileSerializer()

    class Meta:
        model = User
        exclude = ['password', 'groups', 'user_permissions']
        read_only_fields = ['last_login', 'is_superuser', 'username', 'is_staff', 'is_active', 'date_joined']

    def update(self, instance, validated_data):
        """Modify update method for nested serializer"""

        # handle profile data first
        profile = instance.profile
        profile_data = validated_data.pop('profile')
        profile.birth_date = profile_data.get('birth_date', profile.birth_date)
        profile.picture = profile_data.get('picture', profile.picture)
        profile.bio = profile_data.get('bio', profile.bio)
        profile.save()

        print("profile_data", profile_data)

        # now our main instance
        instance.email = validated_data.get('email', instance.email)
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.save()

        return instance


class PostSerializer(ModelSerializer):
    """Serializer for post when this is list call"""
    
    excerpt = SerializerMethodField('get_excerpt')
    user = UserSerializer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def get_excerpt(self, obj):
        return obj.get_excerpt()
    