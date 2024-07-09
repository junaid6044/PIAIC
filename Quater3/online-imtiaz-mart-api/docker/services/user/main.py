from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import User

DATABASE_URL = "postgresql://user:password@postgres:5432/online_mart"

engine = create_engine(DATABASE_URL)

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.get("/")
def read_root():
    return {"message": "User service is up and running"}

# app = FastAPI()

# @app.on_event("startup")
# def on_startup():
#   SQLModel.metadata.create_all(engine)

@app.post("/users/", response_model=User)
def create_user(user: User, session: Session = Depends(get_session)):
  session.add(user)
  session.commit()
  session.refresh(user)
  return user

@app.get("/users/", response_model=List[User])
def read_users(session: Session = Depends(get_session)):
  users = session.exec(select(User)).all()
  return users

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int, session: Session = Depends(get_session)):
  user = session.get(User, user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  return user

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: User, session: Session = Depends(get_session)):
  db_user = session.get(User, user_id)
  if not db_user:
    raise HTTPException(status_code=404, detail="User not found")
  user.id = user_id
  session.add(user)
  session.commit()
  session.refresh(user)
  return user

@app.delete("/users/{user_id}")
def delete_user(user_id: int, session: Session = Depends(get_session)):
  user = session.get(User, user_id)
  if not user:
    raise HTTPException(status_code=404, detail="User not found")
  session.delete(user)
  session.commit()
  return {"message": "User deleted successfully"}
 
