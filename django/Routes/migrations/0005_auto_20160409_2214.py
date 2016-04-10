# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-10 01:14
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Routes', '0004_auto_20160409_1951'),
    ]

    operations = [
        migrations.CreateModel(
            name='APRoute',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('isActive', models.BooleanField(default=False)),
            ],
        ),
        migrations.RenameField(
            model_name='concreteroute',
            old_name='routeId',
            new_name='route',
        ),
        migrations.RenameField(
            model_name='guide',
            old_name='userId',
            new_name='user',
        ),
        migrations.RenameField(
            model_name='traveler',
            old_name='userId',
            new_name='user',
        ),
        migrations.RemoveField(
            model_name='concreteroute',
            name='guideId',
        ),
        migrations.RemoveField(
            model_name='guide',
            name='activeRoutes',
        ),
        migrations.RemoveField(
            model_name='guide',
            name='pendingRoutes',
        ),
        migrations.RemoveField(
            model_name='traveler',
            name='activeRoutes',
        ),
        migrations.RemoveField(
            model_name='traveler',
            name='pendingRoutes',
        ),
        migrations.AddField(
            model_name='concreteroute',
            name='cost',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='concreteroute',
            name='guide',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='Routes.Guide'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='route',
            name='country',
            field=models.CharField(default=0, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='aproute',
            name='concreteRoute',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Routes.ConcreteRoute'),
        ),
        migrations.AddField(
            model_name='aproute',
            name='guide',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Routes.Guide'),
        ),
        migrations.AddField(
            model_name='aproute',
            name='traveler',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Routes.Traveler'),
        ),
    ]