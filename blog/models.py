from django.db import models
from django.contrib.auth.models import User
from django.utils import timesince, timezone

PICTURE_UPLOAD_TO = "images"

class UserProfile(models.Model):
    """Hold some extra fields for default user model"""
    
    birth_date = models.DateField(null=True, blank=True)
    bio = models.TextField(blank=True, null=True)
    picture = models.ImageField(upload_to=PICTURE_UPLOAD_TO, default="images/nodp.jpg")

    # relationship
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')

    def get_age(self):
        """Get user age in a format of 'x years'"""
        try:
            birth_date = self.birth_date
            return timesince.timesince(birth_date)
        except:
            return "Birthday not available"

    def __str__(self):
        """String representation for this model"""

        return self.user.username



class Post(models.Model):
    """Blog Post model"""
    
    title = models.CharField(max_length=400)
    body = models.TextField()
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    # relationship
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    picture = models.ImageField(upload_to='images', default='images/default.jpg')

    def get_excerpt(self):
        """Get excerpt for post"""

        return self.body[:200]


    def __str__(self):
        """String representation for this model"""

        return self.title

    class Meta:
        ordering = ['-date_created']



class PostView(models.Model):
    """Model for storing Post views"""
    
    view = models.IntegerField(default=0)
    post = models.OneToOneField(Post, on_delete=models.CASCADE)

    def __str__(self):
        """String representation for this model"""

        return f"{self.view}"
