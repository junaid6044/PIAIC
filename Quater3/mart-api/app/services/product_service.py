from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import SQLModel, Field

from ..core.db import SessionLocal

router = APIRouter()

class Product(SQLModel, table=True):
  id: int = Field(default=None, primary_key=True)
  name: str
  description: str
  price: float

async def get_session() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

@router.post("/")
async def create_product(product: Product, session: AsyncSession = Depends(get_session)):
  session.add(product)
  await session.commit()
  await session.refresh(product)
  return product

@router.get("/{product_id}")
async def get_product(product_id: int, session: AsyncSession = Depends(get_session)):
  product = await session.get(Product, product_id)
  return product
