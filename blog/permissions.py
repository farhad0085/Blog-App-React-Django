from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS

class IsOwnPostModify(IsAuthenticated):
    """Allows only post owner to modify post content"""

    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True
        return super().has_permission(request, view) 

    def has_object_permission(self, request, view, obj):
        return True


class IsOwnProfile(BasePermission):
    """Allows only owner to modify their profile"""

    def has_object_permission(self, request, view, obj):

        if request.method in SAFE_METHODS:
            return True

        if obj == request.user:
            return True
        return False 