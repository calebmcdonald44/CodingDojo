from . import views
from django.urls import path

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('create/', views.create, name='create')
]
