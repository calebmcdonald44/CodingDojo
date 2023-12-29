from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('two/', views.two, name="two"),
    path('custom/', views.custom, name='custom'),
    path('destroy_session/', views.destroy_session, name='destroy_session')
]