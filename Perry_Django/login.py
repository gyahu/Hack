from django.db import models
from django.contrib.auth import authenticate, login
from django.http import HttpResponse


def log(request):
    dic = concord(request)
    mail = dic['mail']
    password = dic['password']

    user = authenticate(mail=mail, password=password)

    if user is not None:
        # the password verified for the user
        if user.is_active:
            login(request, user)#Cambiar en setting.py la direccion de login
        else:
            return HttpResponse("Your account has been disabled.")
    else:
        return HttpResponse("The username and/or password were incorrect.")