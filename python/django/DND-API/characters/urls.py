from django.urls import path
from . import views

urlpatterns = [
    path('howdy/', views.first_view),
    path('create/', views.create_character)
]