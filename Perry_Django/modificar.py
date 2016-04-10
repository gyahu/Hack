from getPost import concord
from django.db import models
from django.http import HttpResponse


def mod(request):

    if not request.user.is_authenticated():
        exit()

    dic = concord(request)

    password = dic['password']
    phone = dic['phone']
    languages = dic['languages']
    medical = dic['medical']
    country = dic['country']

    modify(request, password, phone, languages, medical, country)


def modify(request, password=None, phone=None, languages=None, medical=None, country=None):
    user = request.user()
    if password:
        user.set_password(password)
    if phone:
        user.phone = phone
    if languages:
        user.languages = languages
    if password:
        user.medical = medical
    if country:
        user.country = country
    if traveler:
        try:
            Traveler.objects.create(user=user, description=traveler_description, foodConsiderations=food_considerations)
        except Exception:
            return HttpResponse ("Informacion incompleta o incorrecta.")
    if guide:
        try:
            Guide.objects.create(user=user, description=guide_description)
        except Exception:
            return HttpResponse ("Informacion incompleta o incorrecta.")
    if traveler_description:
        t = Traveler.objects.filter(user=user)
        t.description = traveler_description
        t.save()
    if guide_description:
        g = Guide.objects.filter(user=user)
        g.description = guide_description
        g.save()

    user.save()
    return HttpResponse("Informacion modificada.")
