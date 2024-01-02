from django.urls import path
from . import views

urlpatterns = [
    path('', views.surveys, name="surveys"),
    path('new/', views.new, name="new")
]