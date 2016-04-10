from django.http import HttpResponse
<<<<<<< HEAD
from models import*
=======
from utilities import *
>>>>>>> ab7e7042ed9fa2b1a215563e03392f6f355a4723

# Placeholder
def index(request):
<<<<<<< HEAD
	response = HttpResponse("Welcome to Routes!")
    return ValidateForGioia(response)

def ValidateForGioia(response):
	response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "*"
    return response

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
        response = HttpResponse "Mail y/o password incorrecto."
        return ValidateForGioia(response)
    response = HttpResponse "Cuenta registrada."
    return ValidateForGioia(response)
=======
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
>>>>>>> ab7e7042ed9fa2b1a215563e03392f6f355a4723
