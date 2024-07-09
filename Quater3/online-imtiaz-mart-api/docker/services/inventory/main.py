from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import Inventory

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.post("/inventory/", response_model=Inventory)
def create_inventory(inventory: Inventory, session: Session = Depends(get_session)):
  session.add(inventory)
  session.commit()
  session.refresh(inventory)
  return inventory

@app.get("/inventory/", response_model=List[Inventory])
def read_inventory(session: Session = Depends(get_session)):
  inventory = session.exec(select(Inventory)).all()
  return inventory

@app.get("/inventory/{inventory_id}", response_model=Inventory)
def read_inventory_item(inventory_id: int, session: Session = Depends(get_session)):
  inventory = session.get(Inventory, inventory_id)
  if not inventory:
    raise HTTPException(status_code=404, detail="Inventory item not found")
  return inventory

@app.put("/inventory/{inventory_id}", response_model=Inventory)
def update_inventory(inventory_id: int, inventory: Inventory, session: Session = Depends(get_session)):
  db_inventory = session.get(Inventory, inventory_id)
  if not db_inventory:
    raise HTTPException(status_code=404, detail="Inventory item not found")
  inventory.id = inventory_id
  session.add(inventory)
  session.commit()
  session.refresh(inventory)
  return inventory

@app.delete("/inventory/{inventory_id}")
def delete_inventory(inventory_id: int, session: Session = Depends(get_session)):
  inventory = session.get(Inventory, inventory_id)
  if not inventory:
    raise HTTPException(status_code=404, detail="Inventory item not found")
  session.delete(inventory)
  session.commit()
  return {"message": "Inventory item deleted successfully"}
