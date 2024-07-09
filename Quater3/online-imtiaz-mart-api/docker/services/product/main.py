from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import Product

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.post("/products/", response_model=Product)
def create_product(product: Product, session: Session = Depends(get_session)):
  session.add(product)
  session.commit()
  session.refresh(product)
  return product

@app.get("/products/", response_model=List[Product])
def read_products(session: Session = Depends(get_session)):
  products = session.exec(select(Product)).all()
  return products

@app.get("/products/{product_id}", response_model=Product)
def read_product(product_id: int, session: Session = Depends(get_session)):
  product = session.get(Product, product_id)
  if not product:
    raise HTTPException(status_code=404, detail="Product not found")
  return product

@app.put("/products/{product_id}", response_model=Product)
def update_product(product_id: int, product: Product, session: Session = Depends(get_session)):
  db_product = session.get(Product, product_id)
  if not db_product:
    raise HTTPException(status_code=404, detail="Product not found")
  product.id = product_id
  session.add(product)
  session.commit()
  session.refresh(product)
  return product

@app.delete("/products/{product_id}")
def delete_product(product_id: int, session: Session = Depends(get_session)):
  product = session.get(Product, product_id)
  if not product:
    raise HTTPException(status_code=404, detail="Product not found")
  session.delete(product)
  session.commit()
  return {"message": "Product deleted successfully"}
