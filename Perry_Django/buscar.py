from getPost import concord
import json
from django.http import HttpResponse
import models

def buscar(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    country = dic['pais']
    #region = dic['region']
    POI = dic['POI']
    costoMax = dic['max']
    costoMin = dic['min']
    language = dic['language']

    routes = ConcreteRoute.objects.filter(route.country=country, cost__lte=costoMax, cost__gte=costoMin, language in json.loads(route.guide.languages), (set(POI.keys) & set(route.pointsOfInterest.keys)))
    return HttpResponse(json.dump(routes))

