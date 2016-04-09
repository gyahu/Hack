from __future__ import unicode_literals
from encrypted_fields import EncryptedTextField
from django.db import models
from django.core.validators import*
from jsonfield import JSONField
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
import json

# Create your models here.

class CustomUserManager(BaseUserManager):
    def create_user(self, name, rut, dateOfBirth, mail, phone, languages=None, guideId=None, travelerId=None, password=None):
        if not name:
            raise ValueError('Users must have a name')
        if not rut:
            raise ValueError('Users must have a RUT')
        if not dateOfBirth:
            raise ValueError('Users must have a date of birth')
        if not mail:
            raise ValueError('Users must have an email address')
        if not mail:
            raise ValueError('Users must have a phone address')
        if not guideId and not travelerId:
            raise ValueError('Users must have either a guideId or travelerId')

        user = self.model(
            name = name,
            dateOfBirth = dateOfBirth,
            rut = rut,
            mail = self.normalize_email(mail),
            phone = phone,
            languages = json.dumps(languages),
            guideId = guideId,
            travelerId = travelerId,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, name, rut, dateOfBirth, mail, phone, languages, guideId, travelerId, password):
        user = self.create_user(
            name = name,
            dateOfBirth = dateOfBirth,
            rut = rut,
            mail = self.normalize_email(mail),
            phone = phone,
            languages = json.dumps(languages),
            password = password,
            guideId = guideId,
            travelerId = travelerId,
        )

        user.is_admin = True
        user.save(using=self._db)

        return user

class CustomUser(AbstractBaseUser):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    rut = models.IntegerField(validators=[MaxValueValidator(9999999999)])
    dateOfBirth = models.DateField()
    mail = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
    phone = models.IntegerField(validators=[MaxValueValidator(99999999999999999999)])
    languages = JSONField()

    guideId = models.IntegerField()
    travelerId = models.IntegerField()

    USERNAME_FIELD = 'mail'
    REQUIRED_FIELDS = ['name','rut', 'dateOfBirth','mail','phone']

    is_admin = False
    is_active = True

    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.mail

    def has_perm(self, perm, obj=None):
        # "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        # "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        return True

    @property
    def is_staff(self):
        # "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin

class Guide(models.Model):
    rating = models.IntegerField(validators=[MaxValueValidator(10)])
    description = models.CharField(max_length=500)
    pendingRoutes = JSONField()
    activeRoutes = JSONField()

class Traveler(models.Model):
    rating = models.IntegerField(validators=[MaxValueValidator(10)])
    description = models.CharField(max_length=500)
    foodConsiderations = models.CharField(max_length=500)
    bookmarks = JSONField()
    pendingRoutes = JSONField()
    activeRoutes = JSONField()

class Route(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    duration = models.DurationField()
    description = models.CharField(max_length=500)
    pointsOfInterest = JSONField()

class ConcreteRoute(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    guide = models.IntegerField()
    description = models.CharField(max_length=500)
