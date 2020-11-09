from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import Post
from django.contrib.auth.models import User


class PostSerializer(ModelSerializer):
    """Serializer for post when this is list call"""
    

    class Meta:
        model = Post
        fields = '__all__'

    excerpt = SerializerMethodField('get_excerpt')
    featured_image = SerializerMethodField('get_featured_image')

    def get_excerpt(self, obj):
        return obj.get_excerpt()
    
    def get_featured_image(self, obj):
        request = self.context.get('request')
        return request.build_absolute_uri(obj.get_featured_image())