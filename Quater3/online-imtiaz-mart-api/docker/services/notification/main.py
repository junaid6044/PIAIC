from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import SQLModel, Session, select
from typing import List
from sqlmodel import create_engine
from sqlmodel.database import get_session
from sqlmodel.models import Notification

app = FastAPI()

@app.on_event("startup")
def on_startup():
  SQLModel.metadata.create_all(engine)

@app.post("/notifications/", response_model=Notification)
def create_notification(notification: Notification, session: Session = Depends(get_session)):
  session.add(notification)
  session.commit()
  session.refresh(notification)
  return notification

@app.get("/notifications/", response_model=List[Notification])
def read_notifications(session: Session = Depends(get_session)):
  notifications = session.exec(select(Notification)).all()
  return notifications

@app.get("/notifications/{notification_id}", response_model=Notification)
def read_notification(notification_id: int, session: Session = Depends(get_session)):
  notification = session.get(Notification, notification_id)
  if not notification:
    raise HTTPException(status_code=404, detail="Notification not found")
  return notification

@app.put("/notifications/{notification_id}", response_model=Notification)
def update_notification(notification_id: int, notification: Notification, session: Session = Depends(get_session)):
  db_notification = session.get(Notification, notification_id)
  if not db_notification:
    raise HTTPException(status_code=404, detail="Notification not found")
  notification.id = notification_id
  session.add(notification)
  session.commit()
  session.refresh(notification)
  return notification

@app.delete("/notifications/{notification_id}")
def delete_notification(notification_id: int, session: Session = Depends(get_session)):
  notification = session.get(Notification, notification_id)
  if not notification:
    raise HTTPException(status_code=404, detail="Notification not found")
  session.delete(notification)
  session.commit()
  return {"message": "Notification deleted successfully"}
