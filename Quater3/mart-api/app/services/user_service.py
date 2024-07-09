from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlmodel import SQLModel, Field

from ..core.db import SessionLocal

router = APIRouter()

class User(SQLModel, table=True):
  id: int = Field(default=None, primary_key=True)
  name: str
  email: str

async def get_session() -> AsyncSession:
  async with SessionLocal() as session:
    yield session

@router.post("/")
async def create_user(user: User, session: AsyncSession = Depends(get_session)):
  session.add(user)
  await session.commit()
  await session.refresh(user)
  return user

@router.get("/{user_id}")
async def get_user(user_id: int, session: AsyncSession = Depends(get_session)):
  user = await session.get(User, user_id)
  return user
