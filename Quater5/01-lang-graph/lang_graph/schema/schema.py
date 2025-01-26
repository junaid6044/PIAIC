from pydantic import BaseModel # type: ignore
from typing import List, Optional
from datetime import datetime # type: ignore
from sqlmodel import SQLModel, Field # type: ignore


# SQLModel for Expense Table
class Expense(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    description: str
    amount: float
    date: datetime = Field(default_factory=lambda: datetime.now(datetime.UTC))
    category: str

# Pydantic Schemas

# Base schema for creating and reading expenses
class ExpenseBase(BaseModel):
    description: str
    amount: float
    date: datetime = Field(default_factory=lambda: datetime.now(datetime.UTC))
    category: str

# Schema for updating existing expenses
class ExpenseUpdate(BaseModel):
    description: Optional[str] = None
    amount: Optional[float] = None
    date: Optional[datetime] = None
    category: Optional[str] = None