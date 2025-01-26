
from fastapi import APIRouter, Depends, HTTPException # type: ignore
from sqlmodel import Session # type: ignore 
from ..db.database import get_session # type: ignore
from ..model.model import Expense, ExpenseBase, ExpenseUpdate # type: ignore
from ..schema.schema import Expense, ExpenseBase, ExpenseUpdate # type: ignore
from ..crud.crud import create_expense, get_expenses, get_expense, delete_expense # type: ignore
from typing import Annotated



router = APIRouter()

@router.post("/expense")
def add_expense(expense: ExpenseBase, session: Annotated[Session, Depends(get_session)]):
  db_expense = Expense(**expense.dict())
  return create_expense(session, db_expense)


@router.get("/expenses")
def list_expenses(session: Annotated[Session, Depends(get_session)]):
  return get_expenses(session)


@router.get("/expense/{expense_id}")
def read_expense(expense_id: int, session: Annotated[Session, Depends(get_session)]):
  expense = get_expense(session, expense_id)
  if not expense:
    raise HTTPException(status_code=404, detail="Expense not found")
  return expense


@router.delete("/expense/{expense_id}")
def remove_expense(expense_id: int, session: Annotated[Session, Depends(get_session)]):
  if not delete_expense(session, expense_id):
    raise HTTPException(status_code=404, detail="Expense not found")
  return {"detail": "Expense deleted successfully"}

