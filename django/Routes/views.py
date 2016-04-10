from django.http import HttpResponse
from utilities import *

# Placeholder
def index(request):
    return HttpResponse("Welcome to Routes!")

# Occurs when traveler matches a ConcreteRoute
def match(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)
    c_route = ConcreteRoute.objects.filter(id=dic['route'])
    traveler = Traveler.objects.filter(user=request.user())

    c_route.match(traveler)

    return HttpResponse("Route matched. Aproval pending.")

# Occurs when guide confirms a ConcreteRoute match
def confirmMatch(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    guide = Guide.objects.filter(user=request.user())

    p = APRoute.objects.filter(guide=guide, route=id_route)
    p.confirmMatch()

    return HttpResponse("Match confirmed by guide!!!")
