from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add_book/', views.add_book, name='add_book'),
    path('book/<int:book_id>/', views.view_book, name='view_book'),
    path('book/<int:book_id>/add_author/', views.book_add_author, name='book_add_author'),
    path('authors/', views.authors, name="authors"),
    path('add_author/', views.add_author, name="add_authors"),
    path('author/<int:author_id>/', views.view_author, name='view_author'),
    path('author/<int:author_id>/add_book/', views.author_add_book, name='author_add_book'),
]