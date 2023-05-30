from django.shortcuts import render
from .models import Servicio

# Create your views here.

def servicio(request):
    servicio=Servicio.objects.all()
    return render(request,"servicio.html", {"servicio": servicio})