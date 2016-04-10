from getPost import *
import models
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
    ActiveRoute.objects.create(traveler=p.traveler, guide=p.guide, date=p.date, route=p.route)
    p.delete()
    return HttpResponse "Ruta mactheada. Respuesta pendiente."
