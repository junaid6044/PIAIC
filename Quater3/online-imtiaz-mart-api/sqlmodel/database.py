from sqlmodel import SQLModel, create_engine, Session

DATABASE_URL = "postgresql://user:password@postgres/online_mart"

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
  with Session(engine) as session:
    yield session
 
