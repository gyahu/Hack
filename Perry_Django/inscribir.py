from getPost import concord
import models


def inscribir(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    POI = dic['POI']
    name = dic['name']
    country = dic['country']
