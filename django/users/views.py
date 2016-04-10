from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login
from Routes.models import*
from django.core import serializers
from django.utils import timezone
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


def register(request):
	dic = concord(request)
	password = dic['password']
	name = dic['name']
	mail = dic['email']
	phone = dic['phone']
	address = dic['address']
	medicalConsiderations = dic['medicalConsiderations']
	spanish = dic['spanish']
	english = dic['english']
	portuguese = dic['portuguese']
	tourist = dic['tourist']
	guide = dic['guide']
	languages = []
	if spanish:
		languages.add("spanish")
	if english:
		languages.add("english")
	if portuguese:
		languages.add("portuguese")

	try:
		CustomUserManager().create_custom_user(name,timezone.now(),mail,phone,password,languages)
		return HttpResponse("OK")
	except:
		return HttpResponse(status=402)

