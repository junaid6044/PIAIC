from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def root():
  return {
    "Name": "Muhammad Junaid",
    "Class_Detail": "Class 8(12 May 2024)"
  }

def start():
  uvicorn.run("class_task.main:app", host="127.0.0.1", port=8000, reload=True)

