# Generated by Django 5.2 on 2025-05-09 18:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_v'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='v',
        ),
    ]
