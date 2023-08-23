from django.urls import path, include
from .views import LoginView, LogoutView, SignupView
from rest_framework import routers ###
from .views import ClienteViewset ###
from .views import PropiedadesViewset ###

router=routers.DefaultRouter() ###
router.register('cliente',ClienteViewset) ###
##propiedades
propiedad=routers.DefaultRouter() ###
propiedad.register('propiedades',PropiedadesViewset) ###

from django.urls import path ,include ###

urlpatterns = [
    # Auth views
    path('auth/login/',
         LoginView.as_view(), name='auth_login'),

    path('auth/logout/',
         LogoutView.as_view(), name='auth_logout'),
     path('auth/registro/',
         SignupView.as_view(), name='auth_signup'),
   
    path('api/', include(router.urls)), ### Cliente
    
    path('api/', include(propiedad.urls)), ### Propiedades 
    

   
]