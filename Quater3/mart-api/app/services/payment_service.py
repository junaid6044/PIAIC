from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import SQLModel, Field

from ..core.db import SessionLocal

router = APIRouter()

class Payment(SQLModel, table=True):
  id: int = Field(default=None, primary_key=True)
  order_id: int
  amount: float
  status: str

async def get_session() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

@router.post("/")
async def process_payment(payment: Payment, session: AsyncSession = Depends(get_session)):
  session.add(payment)
  await session.commit()
  await session.refresh(payment)
  return payment

@router.get("/{payment_id}")
async def get_payment(payment_id: int, session: AsyncSession = Depends(get_session)):
  payment = await session.get(Payment, payment_id)
  return payment
