from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^createUser/', views.createUser, name='createUser'),
    url(r'^$', views.index, name='index'),
]
