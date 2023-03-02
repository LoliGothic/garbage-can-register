from rest_framework import serializers
from .models import Garbage
 
class GarbageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garbage
        fields = ['id', 'lat', 'lng', 'image', 'comment']