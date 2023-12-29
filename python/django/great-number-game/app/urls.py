from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('guess/', views.guess, name='guess'),
    path('reset/', views.reset, name='reset')
]