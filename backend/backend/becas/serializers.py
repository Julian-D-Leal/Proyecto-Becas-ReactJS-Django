from rest_framework import serializers
from .models import User, guest, root

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_admin','is_guest','password']

class GuestSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": 'password'}, write_only=True)
    class Meta:
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }

class RootSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": 'password'}, write_only=True)
    class Meta:
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }        

