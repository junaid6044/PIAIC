from fastapi import FastAPI
import uvicorn
from sqlmodel import SQLModel,Session, Field, create_engine, select

app = FastAPI()
connection_string = "connection_string"
connection = create_engine(connection_string)

class Students(SQLModel, table = True):
  id: int = Field(default=None, primary_key=True)
  name: str
  age: int
  is_active: bool

SQLModel.metadata.create_all(connection)


@app.get("/students")
def allStudents():
  with Session(connection) as session:
    statement = select(Students)
    results = session.exec(statement)
    data = results.all()
    print(data)
    return data


@app.get("/students/{id}")
def showStudents(id):
  with Session(connection) as session:
    statement = select(Students).where(Students.id == id)
    results = session.exec(statement)
    data = results.all()
    print(data)
    return data

def start():
  uvicorn.run("assignment.main:app", host="127.0.0.1", port=8000, reload=True)

