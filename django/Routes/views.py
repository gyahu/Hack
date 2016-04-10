from django.http import HttpResponse
from models import*

def index(request):
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
