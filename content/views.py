from django.shortcuts import render
from rest_framework.views import APIView
from Youngsoo_Django.models import Feed

class Main(APIView):
    def get(self, request):
        feed_list = Feed.objects.all().order_by('-id')# select * from content_feed;
        print(feed_list)

        return render(request, "Youngsoo_Django/main.html", context=dict(feeds=feed_list))