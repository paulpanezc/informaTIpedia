# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-05-16 16:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contenido', '0003_auto_20160413_1105'),
    ]

    operations = [
        migrations.AddField(
            model_name='subtema',
            name='imagen',
            field=models.ImageField(blank=True, max_length=999, null=True, upload_to='img'),
        ),
    ]
