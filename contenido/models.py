from django.db import models

class Topico(models.Model):
    nombre = models.CharField(max_length = 45, unique = True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = u'Tópico'

class Tema(models.Model):
    nombre = models.CharField(max_length = 45, unique = True)
    topico = models.ForeignKey(Topico)

    def __str__(self):
        return self.nombre

class SubTema(models.Model):
    nombre = models.CharField(max_length = 45, unique = True)
    tema = models.ForeignKey(Tema)
    imagen = models.ImageField(max_length=999, blank=True, null=True, upload_to='img')

    def __str__(self):
        return self.nombre
