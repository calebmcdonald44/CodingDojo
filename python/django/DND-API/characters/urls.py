from django.urls import path
from . import views

urlpatterns = [
    path('howdy/', views.first_view),
    path('create/', views.create_character, name='create_character'),
    path('created/', views.post_char, name='post_char'),
    path('view/<int:char_id>/', views.view_character, name="view_character"),
    path('edit/<int:char_id>/', views.edit_character, name="edit_character"),
    path('update/<int:char_id>', views.update_character, name="update_character")
]