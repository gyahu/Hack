from django.db import models
from getPost import concord
#import valde/clavero


def register(request):
    dic = concord(request)

    password = dic['password']
    name = dic['name']
    rut = dic['rut']
    mail = dic['mail']
    phone = dic['phone']
    array_languages = (dic['languages'])['languages']
    guide_check = dic['guide']
    guide_description = dic['guide_description']
    traveler_check = dic['traveler']
    traveler_description = dic['traveler_description']
    medical_conditions = dic['medical']
    country = dic['country']

    try:
        create_user(name, password, rut, mail, phone, array_languages, guide_check, guide_description,
                traveler_check, traveler_description, medical_conditions, country)
    except Exception:
        print "Mail y/o password incorrecto."

    print "Cuenta registrada."

