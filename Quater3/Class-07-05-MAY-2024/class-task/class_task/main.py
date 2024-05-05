from fastapi import FastAPI, HTTPException
import uvicorn
from sqlmodel import Session, select
from dotenv import load_dotenv
load_dotenv()

from .models.todos import Todo, UpdateTodo
from .config.db import create_tables, engine


app = FastAPI()


@app.get("/todos")
def all_todos():
  with Session(engine) as session:
    statement = select(Todo)
    results = session.exec(statement)
    data = results.all()
    print(data)
    return data


@app.post("/create_todo")
def create_todo(todo: Todo):
  with Session(engine) as session:
    session.add(todo)
    session.commit()
    session.refresh(todo)
    return {"status": 200, "message": "Todo Create"}


@app.put("/update_todo/{id}")
def update_todo(id, todo: UpdateTodo):
  with Session(engine) as session:
    db_todo = session.get(Todo, id)
    if not db_todo:
      raise HTTPException(status_code=404, detail="Todo not found")
    todo_data = todo.model_dump(exclude_unset=True)
    db_todo.sqlmodel_update(todo_data)
    session.add(db_todo)
    session.commit()
    session.refresh(db_todo)
    return {"status": 200, "message": "todo updated successfully"}


@app.delete("/delete_todo/{todo_id}")
def delete_todo(todo_id):
  with Session(engine) as session:
    db_todo = session.get(Todo, todo_id)
    print(db_todo)
    if not db_todo:
      raise HTTPException(status_code=404, detail="Todo not found")
    session.delete(db_todo)
    session.commit()
    return  {"status": 200, "message": "todo deleted successfully"}



@app.get("/")
def root():
  return {
    "Name": "Muhammad Junaid",
    "Class_Detail": "Class 7(5 MAy 2024)"
  }

def start():
  create_tables()
  uvicorn.run("class_task.main:app", host="127.0.0.1", port=8000, reload=True)

