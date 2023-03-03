from django.contrib import admin
from django.urls import path, include
# DRFのrouterを使う
from rest_framework.routers import DefaultRouter
# Viewのインポート
from . import views
 
# DefaultRouter設定
router = DefaultRouter()
router.register('garbage', views.GarbageViewSet)
router.register('stars', views.StarsViewSet)
 
urlpatterns = [
    path('', include(router.urls)),
]

