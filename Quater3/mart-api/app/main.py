from fastapi import FastAPI, Depends, HTTPException
from jose import jwt, JWTError
from datetime import datetime, timedelta
from typing import Annotated
from fastapi.security import OAuth2PasswordRequestForm
from .core.db import init_db
from .services import user_service, product_service, order_service, inventory_service, notification_service, payment_service

app = FastAPI()

@app.on_event("startup")
async def on_startup():
  await init_db()

ALGORITHM = "HS256"
SECRET_KEY = "A Secure Secret Key"
fake_users_db: dict[str, dict[str, str]] = {
  "ameenalam": {
    "username": "ameenalam",
    "full_name": "Ameen Alam",
    "email": "ameenalam@example.com",
    "password": "ameenalamsecret",
  },
  "mjunaid": {
    "username": "mjunaid",
    "full_name": "Muhammad Junaid",
    "email": "mjunaid@example.com",
    "password": "mjunaidsecret",
  },
}

def create_access_token(subject: str , expires_delta: timedelta) -> str:
  expire = datetime.utcnow() + expires_delta
  to_encode = {"exp": expire, "sub": str(subject)}
  encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
  return encoded_jwt

@app.get("/generate_token")
def get_access_token(user_name: str):
  access_token_expires = timedelta(minutes=1)
  access_token = create_access_token(subject=user_name, expires_delta=access_token_expires)
  return {"access_token": access_token}


def decode_access_token(access_token: str):
  decoded_jwt = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
  return decoded_jwt

@app.get("/decode_token")
def decoding_token(access_token: str):
  try:
    decoded_token_data = decode_access_token(access_token)
    return {"decoded_token": decoded_token_data}
  except JWTError as e:
    return {"error": str(e)}


@app.post("/login")
def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends(OAuth2PasswordRequestForm)]):
  user_in_fake_db = fake_users_db.get(form_data.username)
  if not user_in_fake_db:
    raise HTTPException(status_code=400, detail="Incorrect username")

  if not form_data.password == user_in_fake_db["password"]:
    raise HTTPException(status_code=400, detail="Incorrect password")

  access_token_expires = timedelta(minutes=1)

  access_token = create_access_token(
    subject=user_in_fake_db["username"], expires_delta=access_token_expires)

  return {"access_token": access_token, "token_type": "bearer", "expires_in": access_token_expires.total_seconds() }


@app.get("/users/all")
def get_all_users():
  # Note: We never return passwords in a real application
  return fake_users_db

app.include_router(user_service.router, prefix="/users", tags=["users"])
app.include_router(product_service.router, prefix="/products", tags=["products"])
app.include_router(order_service.router, prefix="/orders", tags=["orders"])
app.include_router(inventory_service.router, prefix="/inventory", tags=["inventory"])
app.include_router(notification_service.router, prefix="/notifications", tags=["notifications"])
app.include_router(payment_service.router, prefix="/payments", tags=["payments"])
