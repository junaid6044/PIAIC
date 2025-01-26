from sqlmodel import SQLModel, create_engine, Session # type: ignore

DATABASE_URL = "postgresql://postgres.rmtpuqyseaqirrdjcvyu:Supabase@123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres"

engine = create_engine(DATABASE_URL)


def get_session():
  with Session(engine) as session:
    yield session


def init_db():
  SQLModel.metadata.create_all(engine)
