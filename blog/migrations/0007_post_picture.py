# Generated by Django 3.1.3 on 2020-11-10 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_auto_20201110_1219'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='picture',
            field=models.ImageField(default='images/default.jpg', upload_to='images'),
        ),
    ]