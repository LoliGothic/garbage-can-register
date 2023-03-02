from django.db import models

# Create your models here.

class Garbage(models.Model):
  Id = models.IntegerField(blank=False, null=False, primary_key=True)
  Lat = models.FloatField(blank=False, null=False, default="0.0")
  Lng = models.FloatField(blank=False, null=False, default="0.0")
  Image = models.ImageField(blank=False, null=False)
  comment = models.TextField(blank=True, null=True)
