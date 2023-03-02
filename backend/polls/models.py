from django.db import models
import uuid

# Create your models here.

class Garbage(models.Model):
  id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
  lat = models.FloatField(blank=False, null=False, default="0.0")
  lng = models.FloatField(blank=False, null=False, default="0.0")
  image = models.ImageField(blank=False, null=False, upload_to='img/', default='img/none_image.png')
  comment = models.TextField(blank=True, null=True)
