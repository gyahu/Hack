from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
import json

<<<<<<< HEAD
def ValidateForGioia(response):
	response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "*"
    return response

=======
# Placeholder
>>>>>>> ab7e7042ed9fa2b1a215563e03392f6f355a4723
def index(request):
    return HttpResponse("Welcome to users!")

@csrf_exempt
def createUser(request):
<<<<<<< HEAD
    response = HttpResponse("User creation page.")
    return ValidateForGioia(response)
=======
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
>>>>>>> ab7e7042ed9fa2b1a215563e03392f6f355a4723
