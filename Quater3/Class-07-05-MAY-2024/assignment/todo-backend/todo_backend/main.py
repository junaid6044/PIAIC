from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import pdb
from sqlmodel import Session, select
from dotenv import load_dotenv
load_dotenv()

from .models.todos import Todos, UpdateTodo, Users
from .config.db import create_tables, engine

app = FastAPI()

origins = [
  "http://localhost",
  "http://localhost:3000",
  "http://localhost:8080",
  "http://localhost:3000/todos",
]

app.add_middleware(
  CORSMiddleware,
  allow_origins=origins,
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
def root():
  return {
    "Name": "Muhammad Junaid",
    "Class_Detail": "Class 7(5 MAy 2024)"
  }

@app.get("/todos")
def get_todos():
  with Session(engine) as session:
    statement = select(Todos)
    results = session.exec(statement)
    data = results.all()
    return data

@app.get("/get_todos/{todo_id}")
def get_todos_single(todo_id:int):
  with Session(engine) as session:
    statement = select(Todos).where(Todos.id == todo_id)
    results = session.exec(statement)
    data = results.first()
    return data


@app.put("/update_todo/{id}")
def update_todo(id:int, todo: UpdateTodo):
  with Session(engine) as session:
    db_todo = session.get(Todos, id)
    if not db_todo:
      raise HTTPException(status_code=404, detail="Todo not found")
    todo_data = todo.model_dump(exclude_unset=True)
    db_todo.sqlmodel_update(todo_data)
    session.add(db_todo)
    session.commit()
    session.refresh(db_todo)
    return {"status": 200, "message": "todo updated successfully"}


@app.post("/create_todo")
def create_todo(todo: Todos):
  with Session(engine) as session:
    session.add(todo)
    session.commit()
    session.refresh(todo)
    return {"status": 200, "message": "todo created successfully"}


@app.delete("/delete_todo/{todo_id}")
def delete_todo(todo_id:int):
  with Session(engine) as session:
    db_todo = session.get(Todos, todo_id)
    if not db_todo:
      raise HTTPException(status_code=404, detail="Todo not found")
    session.delete(db_todo)
    return  {"status": 200, "message": "todo deleted successfully"}


@app.post("/create_user")
def create_user(user: Users):
  # pdb.set_trace()
  with Session(engine) as session:
    session.add(user)
    session.commit()
    session.refresh(user)
    return {"status": 200, "message": "user created successfully"}

@app.get("/users")
def get_users():
  with Session(engine) as session:
    statement = select(Users)
    results = session.exec(statement)
    data = results.all()
    return data

@app.get("/get_user/{user_id}")
def get_user_single(user_id:int):
  with Session(engine) as session:
    statement = select(Users).where(Users.id == user_id)
    results = session.exec(statement)
    data = results.first()
    return data

def start():
  create_tables()
  uvicorn.run("todo_backend.main:app", host="127.0.0.1", port=8000, reload=True)
