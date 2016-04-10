from __future__ import unicode_literals
from django.db import models
from django.core.validators import*
from jsonfield import JSONField
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
import json

# Create your models here.

class CustomUserManager():
    def create_custom_user(self, name, dateOfBirth, mail, phone,  password, languages = {}):
        userField = User.objects.create_user(username=mail, password=password)
        userField.save()
        newUser = CustomUser(user=userField, name=name, dateOfBirth=dateOfBirth, mail=mail, phone=phone, languages=languages)
        newUser.save()
        return newUser

    def validate(self, mail, password):
        if authenticate(username=mail, password=password) is not None:
            return CustomUser.objects.get(mail=mail)
        else:
            return None

class CustomUser(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, default=None, editable = False)
    name = models.CharField(max_length=200)
    dateOfBirth = models.DateField()
    mail = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    phone = models.IntegerField(validators=[MaxValueValidator(99999999999999999999)])
    languages = JSONField(default={}, blank=True, null=True)

class Guide(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MaxValueValidator(10)])
    description = models.CharField(max_length=500)

    def addRoute(self, route, date, description, cost):
        newRoute = ConcreteRoute(guide=self,route=route,date=date,description=description,cost=cost)
        newRoute.save()

class Traveler(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    rating = models.IntegerField(validators=[MaxValueValidator(10)])
    description = models.CharField(max_length=500)
    foodConsiderations = models.CharField(max_length=500)
    bookmarks = JSONField(default={}, blank=True, null=True)

class Route(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    duration = models.DurationField()
    description = models.CharField(max_length=500)
    pointsOfInterest = JSONField()
    country = models.CharField(max_length = 50)

class ConcreteRoute(models.Model):
    id = models.AutoField(primary_key=True)
    guide = models.ForeignKey('Guide', on_delete=models.CASCADE)
    route = models.ForeignKey('Route', on_delete=models.CASCADE)
    date = models.DateField()
    description = models.CharField(max_length=500)
    cost = models.IntegerField(default = 0)

    def match(self, traveler):
        newAPRoute = APRoute(traveler=traveler, concreteRoute=self, guide=self.guide)
        newAPRoute.save()

class APRoute(models.Model):
    id = models.AutoField(primary_key=True)
    concreteRoute = models.ForeignKey('ConcreteRoute', on_delete=models.CASCADE)
    guide = models.ForeignKey('Guide', on_delete = models.CASCADE) # redundancy introduced to favor performance
    traveler = models.ForeignKey('Traveler',on_delete = models.CASCADE)
    isActive = models.BooleanField(default=False)

    def confirmMatch(self):
        self.isActive = True
        self.save()
