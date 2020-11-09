from django.urls import path
from django.urls.conf import include
from .views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', PostViewSet)

urlpatterns = [
    path('', include(router.urls))
]
