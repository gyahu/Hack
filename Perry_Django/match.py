from getPost import *
from django.db import models
from django.http import HttpResponse


def match(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    user = request.user()
    guide = Guide.objects.filter(user=user)

    p = APRoute.objects.filter(guide=guide, route=id_route)
    p.isActive = True
    p.save()
    return HttpResponse("Ruta matcheada. Respuesta pendiente.")
