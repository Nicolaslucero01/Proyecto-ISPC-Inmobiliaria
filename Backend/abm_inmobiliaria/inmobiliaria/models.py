from asyncio import AbstractServer
from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

#Tabla CustomUser
class CustomUser(AbstractServer):
    email = models.EmailField(
        max_length=150, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'password']

#Tabla cliente
class Cliente(models.Model):
    id_cliente= models.AutoField(primary_key=True, unique=True)
    E_mail=models.EmailField(max_length=25,blank=False )
    Tipo_cliente=models.CharField(max_length=10,blank=False)
    Fecha_alta= models.DateField(blank=False)
    Nombre_Apellido=models.CharField(max_length=45, blank= False)
    DNI= models.IntegerField(unique=True ,blank= False)
    Telefono=models.IntegerField(blank=False)
    Domicilio=models.CharField(max_length=50, blank=False)
    class Meta:
        db_table= 'Cliente'
        verbose_name= 'Cliente'
        verbose_name_plural= 'Clientes'
    def __unicode__(self):
        return self.Nombre_Apellido
    def __str__(self):
        return self.Nombre_Apellido


#Tabla Propiedades

class Propiedades(models.Model):
    ID_propiedad=models.AutoField(primary_key=True, unique=True)
    id_cliente=models.ForeignKey(Cliente,to_field='id_cliente',on_delete=models.CASCADE, null=True)
    Tipo_propiedad= models.CharField(max_length=10, blank=False)
    Ubicación= models.CharField(max_length=50, blank=False)
    superficie_m2 =models.IntegerField(blank=False)
    Cant_ambientes=models.PositiveBigIntegerField(blank=False)
    Limite_ocupantes=models.PositiveBigIntegerField(blank=False)
    Permite_mascotas=models.BooleanField(default=True)
    Apto_Crédito= models.BooleanField(default=True)
    Tasación=models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    Precio_alquiler=models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)

    class Meta:
        db_table= 'Propiedades'
        verbose_name= 'Propiedad'
        verbose_name_plural= 'Propiedades'
    def __unicode__(self):
        return str(self.ID_propiedad)
    def __str__(self):
        return str(self.ID_propiedad)

#Tabla Operación

class Operacion(models.Model):
    Nro_operacion= models.AutoField(primary_key=True, unique=True)
    ID_propiedad=models.ForeignKey(Propiedades,to_field='ID_propiedad',on_delete=models.CASCADE )
    Tipo_operacion= models.CharField(max_length=15, blank=False)
    Fecha_inicio= models.DateField(blank=False)
    Fecha_fin=models.DateField(blank=False)
    Comision=models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    Motivo_pago=models.CharField(max_length=30, blank=False)
    Total_expensas= models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)
    Pago_total= models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)

    class Meta:
        db_table= 'Operacion'
        verbose_name= 'Operacion'
        verbose_name_plural= 'Operaciones'
    def __unicode__(self):
        return str(self.Nro_operacion)
    def __str__(self):
        return str(self.Nro_operacion)
    
#Tabla Comprobante_Pago 
class Comprobante_Pago(models.Model):
    Nro_comprobante=models.AutoField(primary_key=True, unique=True)
    Nro_operacion=models.ForeignKey(Operacion,to_field='Nro_operacion',on_delete=models.CASCADE)
    id_cliente=models.ForeignKey(Cliente,to_field='id_cliente',on_delete=models.CASCADE)
    Tipo_comprobante=models.CharField(max_length=25, blank=False)
    Descripcion_operacion=models.TextField(max_length=70,blank=False, )
    Monto_pagado= models.DecimalField(blank=False, default=2000, decimal_places=2, max_digits=10)

    class Meta:
        db_table= 'Comprobantes'
        verbose_name= 'Comprobante_pago'
        verbose_name_plural= 'Comprobantes_pago'
    def __unicode__(self):
        return str(self.Nro_comprobante)
    def __str__(self):
        return str(self.Nro_comprobante)


#Tabla de Servicios y la tabla de Categorias
class Categoria(models.Model):
    id_Categoria = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=40, blank=False)
    descripcion = models.TextField(max_length=1000, blank=False)
    class Meta:
        db_table = "categoria"
        verbose_name = "categorias de servicios"
        verbose_name_plural = "Categorias"
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    
class Servicio(models.Model):
    dni = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=40, blank=False)
    descripcion = models.TextField(max_length=1000, blank=False)
    direccion = models.TextField(max_length=100, blank=False)
    precio = models.DecimalField(max_length=100,max_digits=10,blank=False, decimal_places=2)
    id_Categoria = models.ForeignKey(Categoria, to_field="id_Categoria" ,on_delete=models.CASCADE)
    class Meta:  
        db_table = "Servicio"
        verbose_name = "servicios a realizar"
        verbose_name_plural = "servicios"
    def __unicode__(self):
        return self.nombre
    def __str__(self):
        return self.nombre
    








