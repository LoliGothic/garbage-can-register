from rest_framework import serializers
from .models import Garbage, Stars
 
class GarbageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garbage
        fields = ['id', 'lat', 'lng', 'image', 'comment']

class StarsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stars
        fields = ['id', 'stars', 'comment']