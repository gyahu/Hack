from django.http import HttpResponse
import json

# Placeholder
def index(request):
    return HttpResponse("Welcome to users!")

def createUser(request):
    dic = concord(request)
    return HttpResponse(dic)

def concord(request):
    dic = json.loads(request.body)
    return dic
