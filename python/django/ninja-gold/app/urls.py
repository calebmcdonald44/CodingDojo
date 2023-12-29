from . import views
from django.urls import path

urlpatterns = [
    path('', views.reset, name='reset'),
    path('index/', views.index, name='index'),
    path('submit/', views.submit, name='submit'),
    path('reset/', views.reset, name='reset')
]

