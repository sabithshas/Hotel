from django.db import models

# Create your models here.
class Data(models.Model):
    name=models.CharField(max_length=40)
    email=models.CharField(max_length=40)
    phone=models.CharField(max_length=10)
    checkin=models.CharField(max_length=10)
    checkout=models.CharField(max_length=10)
    def __str__(self):
        return self.name

class Login(models.Model):
    username=models.CharField(max_length=30)
    password=models.CharField(max_length=20)
    role=models.CharField(max_length=20)
    def __str__(self):
        return self.username

class Userregister(models.Model):
    name=models.CharField(max_length=50)
    username=models.CharField(max_length=30)
    email=models.CharField(max_length=40)
    phone=models.CharField(max_length=10)
    password=models.CharField(max_length=20)
    confirmpassword=models.CharField(max_length=20)
    role=models.CharField(max_length=20)
    status=models.CharField(max_length=10)
    login_id=models.OneToOneField(Login,on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
class Rooms(models.Model):
    rooms=models.CharField(max_length=50)
    width=models.CharField(max_length=40)
    adults=models.IntegerField()
    childs=models.IntegerField()
    amount=models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/')
    def __str__(self):
        return self.rooms