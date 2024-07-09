from fastapi import FastAPI
from .core.db import init_db
from .services import user_service, product_service, order_service, inventory_service, notification_service, payment_service

app = FastAPI()

@app.on_event("startup")
async def on_startup():
  await init_db()

app.include_router(user_service.router, prefix="/users", tags=["users"])
app.include_router(product_service.router, prefix="/products", tags=["products"])
app.include_router(order_service.router, prefix="/orders", tags=["orders"])
app.include_router(inventory_service.router, prefix="/inventory", tags=["inventory"])
app.include_router(notification_service.router, prefix="/notifications", tags=["notifications"])
app.include_router(payment_service.router, prefix="/payments", tags=["payments"])
