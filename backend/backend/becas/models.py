from django.db import models

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
    vistas=models.IntegerField()
    def __str__(self):
        return self.nombre
