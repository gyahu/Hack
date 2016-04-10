from getPost import *
from django.db import models
from django.http import HttpResponse


def pend(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    c_route = ConcreteRoute.objects.filter(id=id_route)
    user = request.user()

    traveler = Traveler.objects.filter(user=user)

    APRoute.objects.create(traveler=traveler, guide=c_route.guide, concreteRoute=c_route, isActive=False)
    return HttpResponse("Ruta Activada.")

