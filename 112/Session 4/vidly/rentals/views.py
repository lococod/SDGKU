from django.shortcuts import render

# Create your views here.


from django.http import HttpResponse
from .models import Movie
from .models import Director

# def index(request):
#     my_dict = {"insert_me": "I am from views.py"}
#     return render(request,'views/index.html', context=my_dict)

def index(request):
    movies = Movie.objects.all()
    return render(request,'views/index.html', {'movies': movies})

def details(request, model_id):
    movie = Movie.objects.get(id=model_id)
    return render(request,'views/details.html', {'movie': movie})