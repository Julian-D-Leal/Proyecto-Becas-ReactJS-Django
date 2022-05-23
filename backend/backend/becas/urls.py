from django.urls import path
from .views import GuestSignupView, RootSignupView,UserViewSet,LogoutView,RootOnlyView,GuestOnlyView,CustomAuthToken,BecaViewSet
from django.conf.urls import include
from rest_framework import routers

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('list', BecaViewSet)

urlpatterns = [
    path('signup/guest', GuestSignupView.as_view()),
    path('signup/root', RootSignupView.as_view()),
    path('login/',CustomAuthToken.as_view(),name='auth_token'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('guest/dashboard/',GuestOnlyView.as_view()),
    path('root/dashboard/',RootOnlyView.as_view()),
    path('', include(router.urls))
]
