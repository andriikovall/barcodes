from django.contrib import admin

from .models import ProductOld, Product, Order, Delivery, User

admin.site.register(ProductOld)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Delivery)
admin.site.register(User)
