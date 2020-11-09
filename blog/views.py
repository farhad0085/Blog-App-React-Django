from .models import Post
from .serializers import PostSerializer
from .permissions import IsOwnPostModify
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import MultiPartParser, FormParser


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnPostModify]
    lookup_field = 'id'
    parser_classes = [MultiPartParser, FormParser]  
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)