# Generated by Django 3.0.4 on 2020-03-31 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Game',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('player_count', models.CharField(max_length=20)),
                ('length', models.CharField(max_length=20)),
            ],
        ),
    ]