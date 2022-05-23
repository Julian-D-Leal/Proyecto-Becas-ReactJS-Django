from rest_framework.permissions import BasePermission

class IsRootUser(BasePermission):
    def has_permission(self, request,view):
        return bool(request.user and request.user.is_admin)

class IsGuestUser(BasePermission):
    def has_permission(self, request,view):
        return bool(request.user and request.user.is_guest)