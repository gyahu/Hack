from getPost import *
from django.db.models import Q
#import valde/clavero


def match(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    user = request.user()

    p = Pending.objects.filter(Q(traveler=user.id) | Q(guide=user.id), route=id_route)
    Active.objects.create(traveler=p.traveler, guide=p.guide, date=p.date, route=p.route)
    p.delete()

