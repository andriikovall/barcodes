from django.db import models


class ProductOld(models.Model):
    code = models.CharField(max_length=36, primary_key=True)
    image_url = models.CharField(max_length=20000)
    name = models.CharField(max_length=300)
    quantity = models.IntegerField()
    description = models.TextField(max_length=3000)


class User(models.Model):
    id = models.CharField(max_length=36, primary_key=True)

    class UserRole(models.TextChoices):
        MANAGER = 'Manager'
        COURIER = 'Courier'
    role = models.CharField(max_length=10, choices=UserRole.choices, default=UserRole.MANAGER)
    full_name = models.CharField(max_length=100)


class Product(models.Model):
    id = models.CharField(max_length=36, primary_key=True, default='')
    name = models.CharField(max_length=300)
    price = models.IntegerField()


class Order(models.Model):
    id = models.CharField(max_length=36, primary_key=True)
    client = models.CharField(max_length=100)

    class OrderStatus(models.TextChoices):
        CREATED = 'Created',
        IN_DELIVERY = 'InDelivery'
        DONE = 'Done'

    status = models.CharField(max_length=10, choices=OrderStatus.choices)
    created_at = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    product_id = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    order_id = models.ForeignKey(Order, on_delete=models.DO_NOTHING)
    quantity = models.IntegerField()


class Delivery(models.Model):
    id = models.CharField(max_length=36, primary_key=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    courier_id = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    order_id = models.ForeignKey(Order, on_delete=models.DO_NOTHING)
