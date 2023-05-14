from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import status, APIView
from rest_framework.generics import GenericAPIView
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
import datetime
from .models import Data,Login,Userregister,Rooms
from .serializers import DataSerializer,Loginserializer,Userregisterserializer,Roomsserializer
# Create your views here.
class DataAPIView(GenericAPIView):
    serializer_class=DataSerializer
    def post(self,request):
        name=request.data.get('name')
        email=request.data.get('email')
        phone=request.data.get('phone')
        checkin=request.data.get('checkin')
        checkout=request.data.get('checkout')
        serializer=self.serializer_class(data={'name':name,'email':email,'phone':phone,'checkin':checkin,'checkout':checkout})
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'booked sussesfully','success':1},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'messages':'Failed','success':0},status=status.HTTP_400_BAD_REQUEST)

class UserregisterAPIView(GenericAPIView):
    serializer_class=Userregisterserializer
    serializer_class_login=Loginserializer
    def post(self,request):
        name=request.data.get('name')
        username=request.data.get('username')
        email=request.data.get('email')
        phone=request.data.get('phone')
        password=request.data.get('password')
        confirmpassword=request.data.get('confirmpassword')
        role="user"
        Status='0'
        login_id=''

        print("I am here , wwoohooo")
        if (Login.objects.filter(username=username)):
            return Response({'message':'Duplicate Username Found!'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
        
        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
        
        serializer=self.serializer_class(data={'name':name,'username':username,'email':email,'phone':phone,'password':password,'confirmpassword':confirmpassword,'role':role,'status':Status,'login_id':login_id})

        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'user registered successfully','success':1},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':0},status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(GenericAPIView):
    serializer_class=Loginserializer
    def post(self,request):
        username=request.data.get('username')
        password=request.data.get('password')
        role=request.data.get('role')
        log=Login.objects.filter(username=username,password=password,)
        if (log. count ()>0):
            read_serializer = Loginserializer (log, many=True)
            for i in read_serializer.data:
                id=i['id']
                role=i['role']
            return Response({'data':{'id':id,'role':role},'success':1,'message':'Logged in successfully'},status=status.HTTP_200_OK)
        else:
            return Response({'data':'username or password is invalid'},status=status.HTTP_400_BAD_REQUEST)
        
class getuserAPIView(GenericAPIView):
    serializer_class=Userregisterserializer
    def get(self,request):
        sets = Userregister.objects.all()
        print(sets)
        if (sets.count()>0):
             serializer=Userregisterserializer(sets,many=True)
             return Response({'data': serializer.data, 'message': 'User get','success' :1})
        else:           
            return Response({'data': 'User Notavailable'},status=status.HTTP_400_BAD_REQUEST)
        
class updateuserAPIView(GenericAPIView):
    serializer_class=Userregisterserializer
    def put(self,request,id):
        sets = Userregister.objects.get(pk=id)
        serializer=Userregisterserializer(instance=sets,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated successfully','success':1},status=status.HTTP_200_OK)

class SingleUserAPIView(GenericAPIView):
    def get(self,request,id):
        sets=Userregister.objects.get(pk=id)
        
        serializer=Userregisterserializer((sets))
        return Response(serializer.data)
    

class deleteUserAPIView(GenericAPIView):
    def delete(self,request,id):
        deleteuser=Userregister.objects.get(pk=id)
        deleteuser.delete()
        return Response ({'message':'Deleted successfully'})
    

class RoomsAPIView(GenericAPIView):
    serializer_class=Roomsserializer
    def post(self,request):
        rooms=request.data.get('rooms')
        width=request.data.get('width')
        adults=request.data.get('adults')
        childs=request.data.get('childs')
        amount=request.data.get('amount')
        image=request.data.get('image')
        serializer=self.serializer_class(data={'rooms':rooms,'width':width,'adults':adults,'childs':childs,'amount':amount,'image':image})
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Rooms Added sussesfully','success':1},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'messages':'Failed','success':0},status=status.HTTP_400_BAD_REQUEST)

class getroomAPIView(GenericAPIView):
    serializer_class=Roomsserializer
    def get(self,request):
        queryset = Rooms.objects.all()
        if (queryset.count()>0):
            serializer=Roomsserializer(queryset,many=True)
            return Response({'data': serializer.data, 'message': 'Room get','success' :1})
        else:           
            return Response({'data': 'Room Notavailable'},status=status.HTTP_400_BAD_REQUEST)
        
class singleroomAPIView(GenericAPIView):
    def get(self,request,id):
        queryset=Rooms.objects.get(pk=id)
        serializer=Roomsserializer((queryset))
        return Response(serializer.data)
        
class updateroomAPIView(GenericAPIView):
    serializer_class=Roomsserializer
    def put(self,request,id):
        queryset=Rooms.objects.get(pk=id)
        serializer=Roomsserializer(instance=queryset,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'updated successfully','success':1},status=status.HTTP_200_OK)

class deleteroomAPIView(GenericAPIView):
    def delete(self,request,id):
        queryset=Rooms.objects.get(pk=id)
        queryset.delete()
        return Response ({'message':'Deleted successfully'})