from getPost import *
#import valde/clavero


def pend(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    c_route = ConcreteRoute.objects.filter(id=id_route)
    user = request.user()

    Pending.objects.create(traveler=user.id, guide=c_route.guide, date=c_route.date, route=c_route.route)
