from django.test import TestCase
from Routes.models import CustomUser
from django.utils import timezone

# Create your tests here.

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
