from django.shortcuts import render
from rest_framework import generics, permissions, viewsets, status

# 作成したserializerをインポート
from .serializers import GarbageSerializer
# 作成したモデルもインポート
from .models import Garbage
 
 
# Create your views here.
 
class GarbageViewSet(viewsets.ModelViewSet):
    queryset = Garbage.objects.all()
    serializer_class = GarbageSerializer

