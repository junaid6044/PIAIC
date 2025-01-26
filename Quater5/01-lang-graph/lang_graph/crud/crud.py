# app/crud.py
from sqlmodel import Session # type: ignore
from ..model.model import Expense, ExpenseBase, ExpenseUpdate


def create_expense(session: Session, expense: Expense):
  session.add(expense)
  session.commit()
  session.refresh(expense)
  return expense


def get_expenses(session: Session):
  return session.query(Expense).all()


def get_expense(session: Session, expense_id: int):
  return session.get(Expense, expense_id)


def delete_expense(session: Session, expense_id: int):
  expense = session.get(Expense, expense_id)
  if expense:
    session.delete(expense)
    session.commit()
    return True
  return False

