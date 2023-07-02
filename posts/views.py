from django.views.generic import ListView
from .models import Post
from django.shortcuts import render
class HomePageView(ListView):
    model = Post
    template_name = "rand_pics.html"

