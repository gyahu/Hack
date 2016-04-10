from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login
from Routes.models import*
from django.core import serializers
import json

# Placeholder
def index(request):
    return HttpResponse("Welcome to users!")

@csrf_exempt
def createUser(request):
    dic = concord(request)
    return HttpResponse(request)

@csrf_exempt
def log(request):
    manager = CustomUserManager()

    dic = concord(request)
    username = dic['username']
    password = dic['password']

    user = manager.validate(mail = "asd@asd.asd", password = "123")

    if user is not None:
        # the password verified for the user
        if user.user.is_active:
            #HACK
            user.user.backend = 'django.contrib.auth.backends.ModelBackend'
            login(request, user.user) #Cambiar en setting.py la direccion de login

            # Serialize user object
            serialized_usr = serializers.serialize('json', [ user, ])
            return HttpResponse(serialized_usr)

        else:
            return HttpResponse(status = 400) # account disabled
    else:
        return HttpResponse(status = 401) # wrong login keys

def concord(request):
    dic = json.loads(request.body)
    return dic
