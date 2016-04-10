from getPost import concord
<<<<<<< HEAD
from .models import *
=======
from django.db import models
>>>>>>> 99c6f98165770d812b786ea9287f5ff3b7a913a4
from django.http import HttpResponse


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
        return HttpResponse("Mail y/o password incorrecto.")

    return HttpResponse("Cuenta registrada.")

