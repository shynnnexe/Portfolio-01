# Generated by Django 5.0.3 on 2024-03-09 02:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='contact',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='education',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='resume',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='skills',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='tagline',
        ),
        migrations.RemoveField(
            model_name='portfolio',
            name='work',
        ),
    ]
