from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    preferred_units = models.CharField(max_length=10, choices=[('metric', 'Metric'), ('imperial', 'Imperial')], default='metric')
    theme = models.CharField(max_length=10, choices=[('light', 'Light'), ('dark', 'Dark')], default='light')

    def __str__(self):
        return self.user.username

class weatherhistory(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    city=models.CharField(max_length=150)
    temperature=models.FloatField()
    condition=models.CharField(max_length=150)
    searched_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username} - {self.city} at {self.searched_at}"
    
class Searchhistory(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    city=models.CharField(max_length=150)
    searched_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.city} - {self.user.username}"