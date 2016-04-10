from django.test import TestCase
from Routes.models import *
from django.utils import timezone
import datetime

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

        # Obtain first route in DB
        querry = ConcreteRoute.objects.filter(guide=self.guide)

        # Check if ConcreteRoute is in querry results
        inRoutes = False
        for croute in querry:
            if croute.description == "El balde ase la mejor ruta":
                inRoutes = True

        self.assertTrue(inRoutes)
