from sqlmodel import SQLModel, Field
from typing import Optional

class User(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  name: str
  email: str

class Product(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  name: str
  price: float

class Order(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  user_id: int
  product_id: int
  quantity: int

class Inventory(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  product_id: int
  quantity: int

class Notification(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  user_id: int
  message: str

class Payment(SQLModel, table=True):
  id: Optional[int] = Field(default=None, primary_key=True)
  order_id: int
  amount: float
 
