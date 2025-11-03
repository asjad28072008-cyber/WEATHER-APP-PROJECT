from rest_framework import serializers
from django.contrib.auth.models import User
from .models import weatherhistory,Searchhistory

#create a code

class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'password')

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

class weatherhistory(serializers.ModelSerializer):
    class Meta:
        model=weatherhistory
        fields='__all__'

class Searchhistoryserializer(serializers.ModelSerializer):
    class Meta:
        model=Searchhistory
        fields=['id','city','searched_at']