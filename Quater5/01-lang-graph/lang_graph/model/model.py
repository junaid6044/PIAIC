from sqlmodel import SQLModel, Field, Relationship # type: ignore
from pydantic import BaseModel # type: ignore
from typing import List, Optional # type: ignore
from datetime import datetime, timezone # type: ignore
from typing_extensions import Annotated # type: ignore


# SQLModel for Expense Table
class Expense(SQLModel):
  __tablename__ = "expenses"  # Add explicit table name
  __table_args__ = {'extend_existing': True}

  id: Optional[int] = Field(default=None, primary_key=True)
  description: str
  amount: float
  date: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
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
  date: Optional[datetime] = None  # Should accept datetime for flexibility
  category: Optional[str] = None
