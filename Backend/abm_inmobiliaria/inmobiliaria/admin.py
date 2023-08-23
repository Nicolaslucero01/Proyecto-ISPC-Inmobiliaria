from django.contrib import admin
from .models import Categoria, Cliente, Propiedades, Comprobante_Pago, Operacion, Servicio


# tablas bd
class Cliente_admin(admin.ModelAdmin):
    list_display=('Nombre_Apellido','DNI','Tipo_cliente','id_cliente')
class Propiedades_admin(admin.ModelAdmin):
    list_display=('Tipo_propiedad', 'Precio_alquiler','id_cliente', 'ID_propiedad')
class Operacion_admin(admin.ModelAdmin):
    list_display=('Nro_operacion','Tipo_operacion','Fecha_inicio','ID_propiedad')
class Comprobante_admin(admin.ModelAdmin):
    list_display=('Nro_comprobante','Descripcion_operacion')
class Mensajes_admin(admin.ModelAdmin):
    list_display=('Nro_mensaje','Asunto')
class CategoriaAdmin(admin.ModelAdmin):
    list_display= ("nombre", "descripcion")
class ServicioAdmin(admin.ModelAdmin):
    list_display= ("nombre", "descripcion","direccion", "precio","id_Categoria")



admin.site.register(Cliente, Cliente_admin)
admin.site.register(Propiedades, Propiedades_admin)
admin.site.register(Operacion, Operacion_admin)
admin.site.register(Comprobante_Pago,Comprobante_admin)
admin.site.register(Categoria, CategoriaAdmin)
admin.site.register(Servicio,ServicioAdmin)
