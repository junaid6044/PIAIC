from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import SQLModel, Field

from ..core.db import SessionLocal

router = APIRouter()

class Inventory(SQLModel, table=True):
  id: int = Field(default=None, primary_key=True)
  product_id: int
  quantity: int

async def get_session() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

@router.post("/")
async def update_inventory(inventory: Inventory, session: AsyncSession = Depends(get_session)):
  session.add(inventory)
  await session.commit()
  await session.refresh(inventory)
  return inventory

@router.get("/{product_id}")
async def get_inventory(product_id: int, session: AsyncSession = Depends(get_session)):
  inventory = await session.get(Inventory, product_id)
  return inventory
