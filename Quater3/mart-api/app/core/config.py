from sqlmodel import Field, SQLModel

class Settings(SQLModel, table=False):
  DATABASE_URL: str = "postgresql+asyncpg://user:password@db/online_mart"

settings = Settings()
