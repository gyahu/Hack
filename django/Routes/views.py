from django.http import HttpResponse
from models import*
from utilities import *

# Placeholder
def index(request):
	response = HttpResponse("Welcome to Routes!")
	return response

def concord(request):
    dic = json.loads(request.body)
    return dic

def register(request):
    dic = concord(request)

    password = dic['password']
    name = dic['name']
    mail = dic['mail']
    phone = dic['phone']
    english = dic['english']
    spanish = dic['spanish']
    portuguese = dic['portuguese']
    guide_check = dic['guide']
    traveler_check = dic['traveler']
    medical_conditions = dic['medical']
    address = dic['address']
    #HACK
    array_languages = []
    if(english):
        array_languages.add("english")
    if(spanish):
        array_languages.add("spanish")
    if(portuguese):
        array_languages.add("portuguese")
    try:
        CustomUserManager.create_user(name, password, mail, phone, array_languages, medical_conditions,guide_check,traveler_check, country)
    except Exception:
    	return HttpResponse("Welcome to Routes!")

# Occurs when traveler matches a ConcreteRoute
def pending(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)
    c_route = ConcreteRoute.objects.filter(id=dic['route'])
    traveler = Traveler.objects.filter(user=request.user())

    c_route.match(traveler)

    return HttpResponse("Route matched. Aproval pending.")

# Occurs when guide selects a ConcreteRoute match
def match(request):
    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    id_route = dic['route']
    guide = Guide.objects.filter(user=request.user())

    p = APRoute.objects.filter(guide=guide, route=id_route)
    p.confirmMatch()

    return HttpResponse("Match confirmed by guide!!!")