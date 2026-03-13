from sqlalchemy.orm import Session
from . import models


def create_user(db: Session, email: str, password: str, role="user"):
    user = models.User(email=email, password=password, role=role)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def create_task(db: Session, title: str, description: str, owner_id: int):
    task = models.Task(title=title, description=description, owner_id=owner_id)
    db.add(task)
    db.commit()
    db.refresh(task)
    return task


def get_tasks(db: Session):
    return db.query(models.Task).all()


def delete_task(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()

    if task:
        db.delete(task)
        db.commit()

    return task