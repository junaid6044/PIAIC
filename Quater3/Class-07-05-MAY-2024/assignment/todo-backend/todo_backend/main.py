from fastapi import FastAPI, HTTPException
import uvicorn
from sqlmodel import Session, select
from dotenv import load_dotenv
load_dotenv()

from .models.todos import Todos, UpdateTodo, Users
from .config.db import create_tables, engine

app = FastAPI()

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
    data = results.all()
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
  with Session(engine) as session:
    session.add(user)
    session.commit()
    session.refresh(user)
    return {"status": 200, "message": "user created successfully"}

def start():
  create_tables()
  uvicorn.run("todo_backend.main:app", host="127.0.0.1", port=8000, reload=True)
