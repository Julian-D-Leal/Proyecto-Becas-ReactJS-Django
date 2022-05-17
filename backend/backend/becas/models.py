from django.db import models

class Beca (models.Model):
    nombre=models.CharField(max_length=20)
    categoria=models.CharField(max_length=13)
    porcentaje=models.FloatField()
    pais=models.CharField(max_length=20)
    universidad=models.CharField(max_length=30)
    requerimientos= models.TextField()
    vistas=models.IntegerField()
    def __str__(self):
        return self.nombre
