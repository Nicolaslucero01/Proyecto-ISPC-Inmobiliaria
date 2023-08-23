from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from .models import Cliente ###
from .models import Propiedades ###

#CustomUser
class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True)
    username = serializers.CharField(
        required=True)
    password = serializers.CharField(
        min_length=8)

    class Meta:
        model = get_user_model()
        fields = ('email', 'username', 'password')
    def validate_password(self, value):
        return make_password(value)

#Cliente
class ClienteSerializer(serializers.ModelSerializer): ###
 class Meta: ###
  model= Cliente ###
  fields='__all__' ###
  #fields=('nombre','observacion')

 
 #Propiedades

class PropiedadesSerializer(serializers.ModelSerializer): ###
 class Meta: ###
  model= Propiedades ###
  fields='__all__' ###
