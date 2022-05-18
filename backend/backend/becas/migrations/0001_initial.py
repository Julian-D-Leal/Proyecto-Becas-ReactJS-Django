# Generated by Django 4.0.4 on 2022-05-18 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Beca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=20)),
                ('categoria', models.IntegerField(choices=[(1, 'Nacional'), (2, 'Internacional')])),
                ('porcentaje', models.FloatField()),
                ('pais', models.CharField(max_length=20)),
                ('universidad', models.CharField(max_length=30)),
                ('requerimientos', models.TextField()),
                ('vistas', models.IntegerField()),
            ],
        ),
    ]
