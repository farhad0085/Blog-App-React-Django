from django.contrib.auth.models import User
from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import UserProfile, PostView, Post

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Create a user profile once the user created"""

    if created:
        UserProfile.objects.create(
            birth_date='1900-01-01',
            user=instance
        )


@receiver(post_save, sender=Post)
def create_post_view(sender, instance, created, **kwargs):
    """Create a post view item for the post once the post created"""

    if created:
        PostView.objects.create(
            post=instance
        )
