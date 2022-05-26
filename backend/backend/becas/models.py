from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db.models.signals import post_save
from django.conf import settings
from django.dispatch import receiver
from django.urls import reverse
from rest_framework.authtoken.models import Token



status = [
    (1,'Nacional'),
    (2,'Internacional')
]

class Beca (models.Model):
    nombre=models.CharField(max_length=20)
    categoria=models.IntegerField(null=False, blank=False,choices=status)
    porcentaje=models.FloatField()
    pais=models.CharField(max_length=20)
    universidad=models.CharField(max_length=30)
    requerimientos= models.TextField()
    vistas=models.IntegerField(default=0)
    def __str__(self):
        return self.nombre

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)
    is_guest = models.BooleanField(default=False)

    def __str__(self):
        return self.username

class root(models.Model):
    user=models.OneToOneField(User,related_name="user",on_delete=models.CASCADE)
    def __str__(self):
        return self.user.username

class guest(models.Model):
    user=models.OneToOneField(User,related_name="guest",on_delete=models.CASCADE)
    def __str__(self):
        return self.user.username

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

