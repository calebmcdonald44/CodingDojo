from django.urls import path, include
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('result/', views.result, name='result'),
    path('show/', views.show, name="show")
]