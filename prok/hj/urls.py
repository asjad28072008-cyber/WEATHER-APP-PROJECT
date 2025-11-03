from django.urls import path
from .views import RegisterView,get_weather,get_search_history,save_search_history,Weatherview
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', TokenObtainPairView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('weather/<str:city>/',get_weather,name='weather-data'),
    path('weather/history/',get_search_history),
    path('weather/save/',save_search_history),
   ]
