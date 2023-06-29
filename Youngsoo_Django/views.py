from django.shortcuts import render
from rest_framework.views import APIView


class Sub(APIView):
    def get(self, request):
        return render(request, "index.html")

class Rand_pics(APIView):
    def get(self, request):
        return render(request, "rand_pics.html")

class Pics(APIView):
    def get(self, request):
        return render(request, "pics.html")