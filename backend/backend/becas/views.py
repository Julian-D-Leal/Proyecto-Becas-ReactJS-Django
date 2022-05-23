from rest_framework import viewsets
from .models import User
from rest_framework import generics, status,permissions
from rest_framework.response import Response
from .serializers import GuestSignupSerializer, RootSignupSerializer,UserSerializer
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.views import APIView
from .permissions import IsGuestUser, IsRootUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer 

class GuestSignupView(generics.GenericAPIView):
    serializer_class=GuestSignupSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message":"Cuenta creada correctamente"
        })

class RootSignupView(generics.GenericAPIView):
    serializer_class=RootSignupSerializer
    def post(self,request,*args,**kwargs):
        serializer=self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user":UserSerializer(user,context=self.get_serializer_context()).data,
            "token": Token.objects.get(user=user).key,
            "message":"Cuenta creada correctamente"
        })

class CustomAuthToken(ObtainAuthToken):
   def post(self,request,*args,**kwargs):
       serializer = self.serializer_class(data=request.data,context={'request'})
       serializer.is_valid(raise_exception=True)
       user = serializer.validated_data['user']
       token,created = Token.objects.get_or_create(user=user)
       return Response({
           'token':token.key,
           'user_id':user.pk,
           'is_admin':user.is_admin
       })

class LogoutView(APIView):
    def post(self, request, format=None):
        request.auth.delete()
        return Response(status=status.HTTP_200_OK)

class GuestOnlyView(APIView):
    permission_classes=[permissions.IsAuthenticated&IsGuestUser]
    serializer_class = UserSerializer
    
    def get_objetc(self):
        return self.request.user

class RootOnlyView(APIView):
    permission_classes=[permissions.IsAuthenticated&IsRootUser]
    serializer_class = UserSerializer
    
    def get_objetc(self):
        return self.request.user