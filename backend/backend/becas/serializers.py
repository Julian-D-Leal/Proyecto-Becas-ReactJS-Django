from rest_framework import serializers
from .models import User, guest, root, Beca

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_admin','is_guest','password']

class GuestSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": 'password'}, write_only=True)
    class Meta:
        model=User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }
    def save(self, **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"error": "Las contraseñas no coinciden"})
        user.set_password(password)
        user.is_guest=True
        user.save()
        guest.objects.create(user=user)
        return user

class RootSignupSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={"input_type": 'password'}, write_only=True)
    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password': {'write_only': True}
        }   
    def save(self, **kwargs):
        user=User(
            username=self.validated_data['username'],
            email=self.validated_data['email']
        )
        password=self.validated_data['password']
        password2=self.validated_data['password2']
        if password != password2:
            raise serializers.ValidationError({"error": "Las contraseñas no coinciden"})
        user.set_password(password)
        user.is_admin=True
        user.save()
        root.objects.create(user=user)
        return user

class BecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beca
        fields=["id", "nombre","categoria","porcentaje","pais","universidad","requerimientos","vistas"]
