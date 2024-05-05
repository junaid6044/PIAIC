from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def hello():
  return {
    "name": "Muhammd Junaid",
    "class": "Docker compose and dev container"
    }