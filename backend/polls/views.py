from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status

# 作成したserializerをインポート
from .serializers import GarbageSerializer, StarsSerializer
# 作成したモデルもインポート
from .models import Garbage, Stars
 
class GarbageViewSet(viewsets.ModelViewSet):
    queryset = Garbage.objects.all()
    serializer_class = GarbageSerializer

class StarsViewSet(viewsets.ModelViewSet):
    queryset = Stars.objects.all()
    serializer_class = StarsSerializer