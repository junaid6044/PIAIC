from sqlmodel import SQLModel, create_engine
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

from .config import settings

DATABASE_URL = settings.DATABASE_URL

engine = create_async_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(
  bind=engine,
  class_=AsyncSession,
  expire_on_commit=False
)

async def init_db():
  async with engine.begin() as conn:
    await conn.run_sync(SQLModel.metadata.create_all)



