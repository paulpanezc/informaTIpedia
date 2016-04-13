
from django.shortcuts import render
from django.views.generic import TemplateView
from contenido.models import *

class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        topicos = Topico.objects.all().order_by('nombre')
        context['topicos'] = topicos
        return context
