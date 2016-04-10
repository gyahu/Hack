from django.http import HttpResponse
from utilities import *

# Placeholder
def index(request):
    return HttpResponse("Welcome to Routes!")

# Occurs when traveler matches a ConcreteRoute
def pending(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)
    c_route = ConcreteRoute.objects.filter(id=dic['route'])
    traveler = Traveler.objects.filter(user=request.user())

    c_route.match(traveler)

    return HttpResponse("Ruta Activada.")

# Occurs when guide selects a ConcreteRoute match
def match(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    guide = Guide.objects.filter(user=request.user())

    p = APRoute.objects.filter(guide=guide, route=id_route)
    p.isActive = True
    p.save()
    ActiveRoute.objects.create(traveler=p.traveler, guide=p.guide, date=p.date, route=p.route)
    p.delete()
    return HttpResponse("Ruta mactheada. Respuesta pendiente.")
