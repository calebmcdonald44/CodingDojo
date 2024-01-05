from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('shows/add/', views.add_show, name="add_show"),
    path('shows/create/', views.create, name="create"),
    path('shows/all/', views.all_shows, name="all_shows"),
    path('shows/<int:show_id>/', views.one_show, name='one_show'),
    path('shows/delete/<int:show_id>/', views.delete, name="delete"),
    path('shows/edit/<int:show_id>/', views.edit, name="edit"),
    path('shows/update/<int:show_id>/', views.update, name="update")
]