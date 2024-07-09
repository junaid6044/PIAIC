from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import SQLModel, Field

from ..core.db import SessionLocal

router = APIRouter()

class Order(SQLModel, table=True):
  id: int = Field(default=None, primary_key=True)
  user_id: int
  product_id: int
  quantity: int

async def get_session() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

@router.post("/")
async def create_order(order: Order, session: AsyncSession = Depends(get_session)):
  session.add(order)
  await session.commit()
  await session.refresh(order)
  return order

@router.get("/{order_id}")
async def get_order(order_id: int, session: AsyncSession = Depends(get_session)):
  order = await session.get(Order, order_id)
  return order
