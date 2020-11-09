from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from .models import Post
from .serializers import PostSerializer
from .permissions import IsOwnPostModify
from rest_framework.viewsets import ModelViewSet


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnPostModify]
    lookup_field = 'id'
    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)