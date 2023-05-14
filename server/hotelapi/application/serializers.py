from rest_framework import serializers
from .models import Data,Login,Userregister,Rooms


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields='__all__'

class Loginserializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields='__all__'
    
class Userregisterserializer(serializers.ModelSerializer):
    class Meta:
        model = Userregister
        fields='__all__'
        def create(self,validated_data):
            return Userregister.objects.create(**validated_data)
        
class Roomsserializer(serializers.ModelSerializer):
    class Meta:
        model = Rooms
        fields='__all__'
        def create(self,validated_data):
            return Rooms.objects.create(**validated_data)
