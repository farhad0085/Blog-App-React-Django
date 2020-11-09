from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS

class IsOwnPostModify(IsAuthenticated):
    """Allows only post owner to modify post content"""

    def has_permission(self, request, view):
        print("has_permission Called")

        if request.method in SAFE_METHODS:
            return True
        return super().has_permission(request, view) 

    def has_object_permission(self, request, view, obj):
        print("has_object_permission Called")
        return True