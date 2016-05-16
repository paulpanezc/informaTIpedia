
from django.shortcuts import render
from django.views.generic import TemplateView
from django.core import serializers
from django.http import HttpResponse
from contenido.models import *


class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        topicos = Topico.objects.all().order_by('nombre')
        context['topicos'] = topicos
        return context

class API():

    def get_temas(self, request):
        temas = Tema.objects.filter(topico_id = request.GET['id']).order_by('nombre')
        data = serializers.serialize("json", temas)
        return HttpResponse(data, content_type='application/json')

    def get_subtemas(self, request):
        subtemas = SubTema.objects.filter(tema_id = request.GET['id']).order_by('nombre')
        data = serializers.serialize("json", subtemas)
        return HttpResponse(data, content_type='application/json')
