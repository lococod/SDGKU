from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:movie_id>', views.details, name='details'),
     path('cart/<int:movie_id>', views.cart, name='cart'),
   
]