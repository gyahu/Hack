from django.http import HttpResponse

def ValidateForGioia(response):
	response["Access-Control-Allow-Origin"] = "*"
    response["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS"
    response["Access-Control-Max-Age"] = "1000"
    response["Access-Control-Allow-Headers"] = "*"
    return response

def index(request):
    return HttpResponse("Welcome to users!")

def createUser(request):
    response = HttpResponse("User creation page.")
    return ValidateForGioia(response)
