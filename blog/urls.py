from django.urls import path
from django.urls.conf import include
from .views import PostViewSet, UserRetrieveUpdateAPIView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('user/<username>/', UserRetrieveUpdateAPIView.as_view())
]
