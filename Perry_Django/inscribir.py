from getPost import concord
from django.db import models
from django.http import HttpResponse


def inscribir_route(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    POI = dic['POI']#Obtener de una funcion en map.js
    name = dic['name']
    country = dic['country']
    duration = dic['duration']
    description = dic['description']

    Route.objects.create(name=name, country=country, duration=duration, description=description, pointsOfInterest=POI)

