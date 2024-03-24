from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/")
def helloworld():
  print("Hello World!!!")
  return "Hello World"

@app.get("/gettodos")
def gettodos():
  print("All Todos!!!")
  return {"items": ["foo", "bar", "baz"]}

@app.get("/gettodos/{id}")
def pathvariable(id):
  print("All Todos!!!", id)
  return id

@app.get("/queryparamter")
def queryparams(name: str, rollno: str):
  print("All Todos!!!", name, rollno)
  return name + rollno

@app.get("/getsingletodo")
def getsingletodo():
  print("Single Todo!!!")
  return {"items": ["foo", "bar", "baz"]}

def start():
  uvicorn.run("todos.main:app", host="127.0.0.1", port=8080, reload=True)

