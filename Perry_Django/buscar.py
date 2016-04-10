from getPost import concord
#import valde/clavero


def buscar(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    country = dic['pais']
    region = dic['region']
    POI = dic['POI']
    costoMax = dic['max']
    costoMin = dic['min']
    language = dic['language']

    ConcreteRoute.objects.filter()