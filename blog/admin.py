from django.contrib import admin
from .models import UserProfile, Post, PostPicture, PostView


class UserProfileAdmin(admin.ModelAdmin):
    """Customize admin interface for this model"""

    list_display = ['user', 'birth_date', 'get_age', 'get_short_bio', 'picture']

    def get_short_bio(self, instance):
        """Get short bio for a user because full bio should not display in the table"""
        try:
            short_bio = instance.bio[:40]
        except:
            short_bio = "No bio available"
        return short_bio

    def get_age(self, instance):
        """Get short bio for a user because full bio should not display in the table"""

        return instance.get_age()

    get_short_bio.short_description = "Bio"
    get_age.short_description = "Age"


class PostAdmin(admin.ModelAdmin):
    """Customize admin interface for this model"""

    list_display = ['title', 'get_post_view', 'user', 'date_created', 'date_updated', 'get_short_body']

    def get_short_body(self, instance):
        """Get short body for a post"""
        
        return instance.body[:200]

    def get_post_view(self, instance):
        """Get post view for a post"""
        
        return instance.postview.view

    get_short_body.short_description = "Body"
    get_post_view.short_description = "Views"


class PostViewAdmin(admin.ModelAdmin):
    """Customize admin interface for this model"""

    list_display = ['post', 'view']


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(PostPicture)
admin.site.register(PostView, PostViewAdmin)
