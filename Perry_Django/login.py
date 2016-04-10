from django.db import models
from django.contrib.auth import authenticate, login
import models
from django.http import HttpResponse
from encrypted_fields import EncryptedFieldMixin
#import valde/clavero


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
            print("Your account has been disabled.")
    else:
        print("The username and/or password were incorrect.")