from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import Order

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.post("/orders/", response_model=Order)
def create_order(order: Order, session: Session = Depends(get_session)):
  session.add(order)
  session.commit()
  session.refresh(order)
  return order

@app.get("/orders/", response_model=List[Order])
def read_orders(session: Session = Depends(get_session)):
  orders = session.exec(select(Order)).all()
  return orders

@app.get("/orders/{order_id}", response_model=Order)
def read_order(order_id: int, session: Session = Depends(get_session)):
  order = session.get(Order, order_id)
  if not order:
    raise HTTPException(status_code=404, detail="Order not found")
  return order

@app.put("/orders/{order_id}", response_model=Order)
def update_order(order_id: int, order: Order, session: Session = Depends(get_session)):
  db_order = session.get(Order, order_id)
  if not db_order:
    raise HTTPException(status_code=404, detail="Order not found")
  order.id = order_id
  session.add(order)
  session.commit()
  session.refresh(order)
  return order

@app.delete("/orders/{order_id}")
def delete_order(order_id: int, session: Session = Depends(get_session)):
  order = session.get(Order, order_id)
  if not order:
    raise HTTPException(status_code=404, detail="Order not found")
  session.delete(order)
  session.commit()
  return {"message": "Order deleted successfully"}
