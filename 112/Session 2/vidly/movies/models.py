from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length = 255)
    star = models.CharField(max_length = 255)
    release_year = models.IntegerField()
    Genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    director = models.CharField(max_length = 255)
    image_url = models.TextField()
    production_cost = models.IntegerField()
    filmed_in = models.CharField(max_length = 255)
    production_company = models.CharField(max_length = 255)
    fx_company = models.CharField(max_length = 255)
    sound_company = models.CharField(max_length = 255)