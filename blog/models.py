from django.db import models
from django.contrib.auth.models import User
from django.utils import timesince, timezone

PICTURE_UPLOAD_TO = "images"

class UserProfile(models.Model):
    """Hold some extra fields for default user model"""
    
    birth_date = models.DateField()
    bio = models.TextField(blank=True, null=True)
    picture = models.ImageField(upload_to=PICTURE_UPLOAD_TO, default="default.jpg")

    # relationship
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def get_age(self):
        """Get user age in a format of 'x years'"""

        birth_date = self.birth_date
        return timesince.timesince(birth_date)


    def __str__(self):
        """String representation for this model"""

        return self.user.username



class Post(models.Model):
    """Blog Post model"""
    
    title = models.CharField(max_length=400)
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now_add=True)

    # relationship
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    picture = models.ManyToManyField('PostPicture')    

    def __str__(self):
        """String representation for this model"""

        return self.title


class PostPicture(models.Model):
    """Post Picture model"""
    
    picture = models.ImageField(upload_to=PICTURE_UPLOAD_TO)

    def __str__(self):
        """String representation for this model"""

        return self.picture.url


class PostView(models.Model):
    """Model for storing Post views"""
    
    view = models.IntegerField(default=0)
    post = models.OneToOneField(Post, on_delete=models.CASCADE)

    def __str__(self):
        """String representation for this model"""

        return f"{self.view}"
