from django.contrib.auth import logout
from django.http import HttpResponse


def leave(request):
    logout(request)
    return HttpResponse()

