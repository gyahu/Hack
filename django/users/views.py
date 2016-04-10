from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
import json

# Placeholder

def index(request):
    return HttpResponse("Welcome to users!")

@csrf_exempt
def createUser(request):
    response = HttpResponse("User creation page.")
    return HttpResponse(response)

def log(request):
    dic = concord(request)
    mail = dic['mail']
    password = dic['password']

    user = authenticate(mail = mail, password = password)

    if user is not None:
        # the password verified for the user
        if user.is_active:
            login(request, user) #Cambiar en setting.py la direccion de login
            # Serialize user object
            serialized_usr = serializers.serialize('json', [ user, ])
            return serialized_usr
        else:
            return HttpResponse(status = 401) # account disabled
    else:
        return HttpResponse(status = 401) # wrong login keys
    
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
        response = HttpResponse("Mail y/o password incorrecto.")
        return response
    response = HttpResponse("Cuenta registrada.")
    return response
