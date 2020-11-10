from .models import Post
from .serializers import PostSerializer, UserSerializer
from .permissions import IsOwnPostModify
from rest_framework.viewsets import ModelViewSet
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.contrib.auth.models import User
from rest_framework.generics import RetrieveUpdateAPIView

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnPostModify]
    lookup_field = 'id'
    parser_classes = [MultiPartParser, FormParser]
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'username'
    # parser_classes = [MultiPartParser, FormParser]
    
