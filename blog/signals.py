from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import UserProfile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Create an user profile once the user created"""

    if created:
        UserProfile.objects.create(
            birth_date='1900-01-01',
            user=instance
        )
        