from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import supplier_pydantic, supplier_pydanticIn, Supplier, Product, product_pydanticIn, product_pydantic

app = FastAPI()

@app.get("/")
def index():
    return {"message": "go to /docs for api documentation"}

@app.post("/supplier")
async def add_supplier(supplier_info: supplier_pydanticIn): # type: ignore
    supplier_obj = await Supplier.create(**supplier_info.dict(exclude_unset=True))
    response = await supplier_pydantic.from_tortoise_orm(supplier_obj)
    return {"data": response}

@app.get("/supplier")
async def get_all_suppliers():
    response = await supplier_pydantic.from_queryset(Supplier.all())
    return {"data": response}

@app.get("/supplier/{supplier_id}")
async def get_specific_supplier(supplier_id: int):
    response = await supplier_pydantic.from_queryset_single(Supplier.get(id=supplier_id))
    return {"data": response}

@app.put("/supplier/{supplier_id}")
async def update_supplier(supplier_id: int, update_info: supplier_pydanticIn): # type: ignore
    supplier = await Supplier.get(id=supplier_id)
    update_info = update_info.dict(exclude_unset=True)
    if "name" in update_info:
        supplier.name = update_info["name"]
    if "company" in update_info:
        supplier.company = update_info["company"]
    if "email" in update_info:
        supplier.email = update_info["email"]
    if "phone" in update_info:
        supplier.phone = update_info["phone"]
    await supplier.save()
    response = await supplier_pydantic.from_tortoise_orm(supplier)
    return {"data": response}

@app.post("/product/{supplier_id}")
async def add_product(supplier_id: int, products_details: product_pydanticIn): # type: ignore
    supplier = await Supplier.get(id = supplier_id)
    products_details = products_details.dict(exclude_unset=True)
    products_details['revenue'] += products_details['quantity_sold'] * products_details['unit_price']
    product_obj = await Product.create(**products_details, supplied_by=supplier)
    response = await product_pydantic.from_tortoise_orm(product_obj)
    return {"data": response}

@app.get("/product")
async def get_all_products():
    response = await product_pydantic.from_queryset(Product.all())
    return {"data": response}

@app.get("/product/{id}")
async def specific_product(id: int):
    response = await product_pydantic.from_queryset_single(Product.get(id=id))
    return {"data": response}

@app.put("/product/{id}")
async def update_product(id: int, update_details: product_pydanticIn): # type: ignore
    product = await Product.get(id=id)
    update_info = update_details.dict(exclude_unset=True)
    if "name" in update_info:
        product.name = update_info["name"]
    if "quantity_in_stock" in update_info:
        product.quantity_in_stock = update_info["quantity_in_stock"]
    if "quantity_sold" in update_info:
        product.quantity_sold = update_info["quantity_sold"]
    if "unit_price" in update_info:
        product.unit_price = update_info["unit_price"]
    product.revenue += (product.quantity_sold * product.unit_price) + product.revenue
    await product.save()
    response = await product_pydantic.from_tortoise_orm(product)
    return {"data": response}

@app.delete("/product/{id}")
async def delete_product(id: int):
    product = await Product.get(id=id)
    await product.delete()
    return {"message": "Product deleted successfully"}

register_tortoise(
    app,
    db_url='sqlite://database.sqlite3',
    modules={'models': ['models']},
    generate_schemas=True,
    add_exception_handlers=True
)