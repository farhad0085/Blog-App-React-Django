# Generated by Django 3.1.3 on 2020-11-09 11:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20201109_1719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='birth_date',
            field=models.DateField(blank=True, default=None),
        ),
    ]