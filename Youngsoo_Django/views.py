from django.shortcuts import render
from rest_framework.views import APIView


class Sub(APIView):
    def get(self, request):
        return render(request, "index.html")

class Gal(APIView):
    def get(self, request):
        return render(request, "gallery.html")
