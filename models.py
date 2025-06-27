from tortoise.models import Model
from tortoise import fields

class Products(Model):
   id = fields.IntField(pk=True)
   name = fields.CharField(max_length=30, nullable=False)
   quantity_in_stock = fields.IntField(default=0)
   quantity_sold = fields.IntField(default=0)
   unit_price = fields.DecimalField(max_digits=8, decimal_places=2, default=0.00)
   supplied_by = fields.ForeignKeyField('models.supplier', related_name='goods_supplier')
   revenue = fields.DecimalField(max_digits=20, decimal_places=2, default=0.00)

# class Supplier(Model):
#    id = fields.IntField(pk=True)
#    name = fields.CharField(max_length=30, nullable=False)
#    contact_info = fields.CharField(max_length=100, nullable=True)
#    address = fields.CharField(max_length=100, nullable=True)
#    products = fields.ReverseRelation['Products']
   
#    def __str__(self):
#        return self.name