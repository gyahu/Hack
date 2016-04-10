from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

# Placeholder
def index(request):
    return HttpResponse("Welcome to users!")

@csrf_exempt
def createUser(request):
    dic = concord(request)
    return HttpResponse(request)

def concord(request):
    dic = json.loads(request.body)
    return dic
