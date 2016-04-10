from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to users!")

def createUser(request):
    return HttpResponse("User creation page.")
