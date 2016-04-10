from getPost import concord
import models
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
    user.save()
    return HttpResponse
