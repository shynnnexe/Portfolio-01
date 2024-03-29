# Generated by Django 5.0.3 on 2024-03-09 01:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('school', models.CharField(max_length=255)),
                ('degree', models.CharField(max_length=255)),
                ('years', models.CharField(max_length=25)),
                ('description', models.TextField()),
                ('ordinal', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=255)),
                ('title', models.CharField(max_length=255)),
                ('years', models.CharField(max_length=25)),
                ('description', models.TextField()),
                ('ordinal', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Portfolio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('tagline', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('skills', models.TextField()),
                ('contact', models.TextField()),
                ('resume', models.FileField(upload_to='resumes/')),
                ('image', models.ImageField(upload_to='uploads/')),
                ('url', models.URLField()),
                ('ordinal', models.IntegerField()),
                ('education', models.ManyToManyField(to='portfolio.education')),
                ('work', models.ManyToManyField(to='portfolio.work')),
            ],
        ),
    ]
