from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^createUser/', views.register, name='createUser'),
    url(r'^login/', views.log, name='log'),
    url(r'^register/', views.register, name='register'),
    url(r'^$', views.index, name='index'),

]
