from django.contrib.auth import logout


def leave(request):
    logout(request)
    return HttpResponse

