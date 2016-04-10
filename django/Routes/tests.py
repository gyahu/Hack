from django.test import TestCase, RequestFactory
from Routes.models import *
from Routes.views import *
from django.utils import timezone
import datetime
import json

# Tests :)

# Create and save user
class UserTestCase(TestCase):

    def setUp(self):
        self.user1 = CustomUser(name="balde",dateOfBirth=timezone.now(),mail="balde@balde.pls",phone=666)
        self.user2 = CustomUser(name="perri",dateOfBirth=timezone.now(),mail="perri@perri.pls",phone=1313)

    def test_save_user(self):
        self.user1.save()
        self.user2.save()
        self.assertEqual(self.user1.id, 1)
        self.assertEqual(self.user2.id, 2)
        return True

# Enroll new route as guide
class EnrollRouteTestCase(TestCase):

    def setUp(self):
        # Create new user
        user = CustomUser(name="balde",dateOfBirth=timezone.now(),mail="balde@balde.pls",phone=666)
        user.save()

        # Add user as a guide
        self.guide = Guide(user=user,rating=0,description="Zoi el + veyako del bloke")
        self.guide.save()

        # Add a route
        self.route = Route(name="Ruta1",duration=datetime.timedelta(days=1),description="Wena ruta",pointsOfInterest={},country="Chile")
        self.route.save()

    def test_enroll_route(self):
        # Register route using method in guide class
        self.guide.addRoute(self.route, timezone.now(), "El balde ase la mejor ruta", 0)

        # Obtain first concrete route in DB
        querry = ConcreteRoute.objects.filter(guide=self.guide)

        # Check if ConcreteRoute is in querry results
        inRoutes = False
        for croute in querry:
            if croute.description == "El balde ase la mejor ruta":
                inRoutes = True

        self.assertTrue(inRoutes)

# Traveler matching a ConcreteRoute
class MatchTestCase(TestCase):

    def setUp(self):
        self.c_route = None

        # Create new users
        balde = CustomUser(name = "balde", dateOfBirth = timezone.now(), mail = "balde@balde.pls", phone = 666)
        balde.save()

        perri = CustomUser(name = "perri", dateOfBirth = timezone.now(), mail = "perri@perri.pls", phone = 1313)
        perri.save()

        # Add user as a guide
        self.guide = Guide(user = balde, rating = 0, description = "Zoi el + veyako del bloke")
        self.guide.save()

        # Add user as a traveler
        self.traveler = Traveler(user = perri, rating = 10, description = "El ornitorrinco", foodConsiderations = "Alergico al mani")
        self.traveler.save()

        # Add a route
        self.route = Route(name = "Ruta1", duration = datetime.timedelta(days=1), description = "Wena ruta", pointsOfInterest = {}, country = "Chile")
        self.route.save()

        # Register route using method in guide class
        self.guide.addRoute(self.route, timezone.now(), "El balde ase la mejor ruta", 0)

        # Obtain first concrete route in DB
        querry = ConcreteRoute.objects.filter(guide=self.guide)

        for c_route in querry:
            if c_route.description == "El balde ase la mejor ruta":
                self.c_route = c_route

    # Test traveler matching the resulting ConcreteRoute
    def test_traveler_match(self):
        # Match <3
        self.c_route.match(self.traveler)

        # Obtain first pending route in DB
        querry = APRoute.objects.filter(guide=self.guide)

        # Check if in querry results
        inRoutes = False
        for ap_route in querry:
            if ap_route.concreteRoute.description == "El balde ase la mejor ruta":
                inRoutes = True

        self.assertTrue(inRoutes)

# Guide confirming a pending match
class MatchConfirmTestCase(TestCase):

    def setUp(self):
        self.c_route = None

        # Create new users
        balde = CustomUser(name = "balde", dateOfBirth = timezone.now(), mail = "balde@balde.pls", phone = 666)
        balde.save()

        perri = CustomUser(name = "perri", dateOfBirth = timezone.now(), mail = "perri@perri.pls", phone = 1313)
        perri.save()

        # Add user as a guide
        self.guide = Guide(user = balde, rating = 0, description = "Zoi el + veyako del bloke")
        self.guide.save()

        # Add user as a traveler
        self.traveler = Traveler(user = perri, rating = 10, description = "El ornitorrinco", foodConsiderations = "Alergico al mani")
        self.traveler.save()

        # Add a route
        self.route = Route(name = "Ruta1", duration = datetime.timedelta(days=1), description = "Wena ruta", pointsOfInterest = {}, country = "Chile")
        self.route.save()

        # Register route using method in guide class
        self.guide.addRoute(self.route, timezone.now(), "El balde ase la mejor ruta", 0)

        # Obtain first concrete route in DB
        querry = ConcreteRoute.objects.filter(guide=self.guide)

        for c_route in querry:
            if c_route.description == "El balde ase la mejor ruta":
                self.c_route = c_route

        # Match <3
        self.c_route.match(self.traveler)

        # Obtain first pending route in DB
        querry = APRoute.objects.filter(guide=self.guide)

        # Obtain resulting APRoute
        for ap_route in querry:
            if ap_route.concreteRoute.description == "El balde ase la mejor ruta":
                self.ap_route = ap_route

    # Test match confirm behaviour
    def test_traveler_match(self):
        # Confirm dat match
        self.ap_route.confirmMatch()

        self.assertTrue(self.ap_route.isActive)
>>>>>>> ab7e7042ed9fa2b1a215563e03392f6f355a4723
=======
>>>>>>> Stashed changes
