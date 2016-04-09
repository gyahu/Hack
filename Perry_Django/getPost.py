import json


def concord(request):
    dic = json.loads(request.body)
    return dic
