from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
import json

# Placeholder
def index(request):
    return HttpResponse("Welcome to users!")

@csrf_exempt
def createUser(request):
    dic = concord(request)
    return HttpResponse(request)

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
