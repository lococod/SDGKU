from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name

class Director(models.Model):
    name = models.CharField(max_length = 255)

    def __str__(self):
        return self.name


class Movie(models.Model):
    title = models.CharField(max_length = 255)
    star = models.CharField(max_length = 255)
    release_year = models.IntegerField()
    price = models.FloatField()
    in_stock = models.IntegerField()
    director = models.ForeignKey(Director, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    in_4k = models.BooleanField()
    image_url = models.TextField()

    def __str__(self):
        return self.title+" Release Year: "+ str(self.release_year)
        