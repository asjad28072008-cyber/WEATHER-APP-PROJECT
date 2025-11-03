from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .serializers import UserRegisterSerializer
from django.contrib.auth.models import User

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserRegisterSerializer


from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.views import View
from django.conf import settings
import os
import requests
from django.http import JsonResponse
from decouple import config
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from dotenv import load_dotenv
from .models import weatherhistory,Searchhistory
from.serializers import weatherhistory,Searchhistoryserializer

load_dotenv(dotenv_path='weather.env')

@api_view(['GET'])
@permission_classes([IsAuthenticated])

def get_weather(request,city):
    
    API_KEY=os.getenv("WEATHER_API_KEY",default=None)
    if not API_KEY:
        return JsonResponse({"error":"API key is not found. set weather_aPIkey in.env"},status=500)
    url=f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={city}&days=7&aqi=yes&alert=yes&hour=1"

    try:
        
        
        url=f"http://api.weatherapi.com/v1/forecast.json?key={API_KEY}&q={city}&days=7&aqi=yes&alert=yes&hour=1"
        response=requests.get(url)
        data=response.json()
        # if 'error' in data:
        #     return Response({"error":"city not found"},status=404)
        # if request.user.is_authenticated:
        #     weatherhistory.objects.create(
        #         user=request.user,
        #         city=data['location']['name'],
        #         temperature=data['current']['temp_c'],
        #         condition=data['current']['condition']['text'],
            
        #     )
        return JsonResponse(data)
        
        
        
        
        # weather_data={
        #     "city":data["location"]["name"],
        #     "region":data["location"]["region"],
        #     "country":data["location"]["country"],
        #     "temperature_c":data["current"]["temp_c"],
        #     "condition":data["current"]["condition"]["text"],
        #     "icon":data["current"]["condition"]["icon"],
        #     "wind_kph":data["current"]["wind_kph"],
        #     "humidity":data["current"]["humidity"],
        #     "feelslike_c":data["current"]["feelslike_c"],
        #     "last_updated":data["current"]["last_updated"],
                        

            
        # }
        
        
    except Exception as e:
        
            
        return Response({'error':"something went wrong","details":str(e)},status=500)
    
    
    
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_search_history(request):
    city=request.data.get('city')
    if not city:
        return Response({'error':'city is required'},status=status.HTTP_400_BAD_REQUEST)
    search=Searchhistory.objects.create(user=request.user,city=city)
    return Response(Searchhistoryserializer(search).data,status=status.HTTP_201_CREATED)



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_search_history(request):
    searches=Searchhistory.objects.filter(user=request.user).order_by('-searched_at')
    serializer=Searchhistoryserializer(searches,many=True)
    return Response(serializer.data)

    
       
   
class Weatherview(View):
    def get(self,request,city):
        api_key=settings.WEATHER_API_KEY
        url=f"http://api.weatherapi.com/v1/forecast.json?key={api_key}&q={city}&days=7&aqi=no&alerts=no"    
        
        try:
            response=requests.get(url)
            data=response.json()
            return JsonResponse(data)
        except Exception as e:
            return JsonResponse({"error": str(e)},status=500)
