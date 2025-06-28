from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from models import supplier_pydantic, supplier_pydanticIn, Supplier

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

@app.delete("/supplier/{supplier_id}")
async def delete_supplier(supplier_id: int):
    supplier = await Supplier.get(id=supplier_id)
    await supplier.delete()
    return {"message": "Supplier deleted successfully"}

register_tortoise(
    app,
    db_url='sqlite://database.sqlite3',
    modules={'models': ['models']},
    generate_schemas=True,
    add_exception_handlers=True
)