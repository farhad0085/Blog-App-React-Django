from django.contrib import admin
from .models import UserProfile


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

admin.site.register(UserProfile, UserProfileAdmin)
