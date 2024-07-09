from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import Payment

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.post("/payments/", response_model=Payment)
def create_payment(payment: Payment, session: Session = Depends(get_session)):
  session.add(payment)
  session.commit()
  session.refresh(payment)
  return payment

@app.get("/payments/", response_model=List[Payment])
def read_payments(session: Session = Depends(get_session)):
  payments = session.exec(select(Payment)).all()
  return payments

@app.get("/payments/{payment_id}", response_model=Payment)
def read_payment(payment_id: int, session: Session = Depends(get_session)):
  payment = session.get(Payment, payment_id)
  if not payment:
    raise HTTPException(status_code=404, detail="Payment not found")
  return payment

@app.put("/payments/{payment_id}", response_model=Payment)
def update_payment(payment_id: int, payment: Payment, session: Session = Depends(get_session)):
  db_payment = session.get(Payment, payment_id)
  if not db_payment:
    raise HTTPException(status_code=404, detail="Payment not found")
  payment.id = payment_id
  session.add(payment)
  session.commit()
  session.refresh(payment)
  return payment

@app.delete("/payments/{payment_id}")
def delete_payment(payment_id: int, session: Session = Depends(get_session)):
  payment = session.get(Payment, payment_id)
  if not payment:
    raise HTTPException(status_code=404, detail="Payment not found")
  session.delete(payment)
  session.commit()
  return {"message": "Payment deleted successfully"}
