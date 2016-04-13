from django.contrib import admin
from django.contrib.auth.models import Group
from contenido.models import *

admin.site.unregister(Group)
admin.site.register(Topico)
admin.site.register(Tema)
admin.site.register(SubTema)
