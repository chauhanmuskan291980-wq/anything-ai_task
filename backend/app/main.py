from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import engine, Base
from . import schemas, models, crud, auth
from .dependencies import get_db

app = FastAPI(title="Anything.ai Task API", version="v1")
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API running"}



@app.post("/api/v1/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):

    existing_user = crud.get_user_by_email(db, user.email)

    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = auth.hash_password(user.password)

    new_user = crud.create_user(db, user.email, hashed_password)

    return {"message": "User created"}


@app.post("/api/v1/login")
def login(user: schemas.UserLogin, db: Session = Depends(get_db)):

    db_user = crud.get_user_by_email(db, user.email)

    if not db_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    if not auth.verify_password(user.password, db_user.password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = auth.create_access_token({"user_id": db_user.id, "role": db_user.role})

    return {"access_token": token}


@app.post("/api/v1/tasks")
def create_task(task: schemas.TaskCreate, db: Session = Depends(get_db)):

    new_task = crud.create_task(db, task.title, task.description, owner_id=1)

    return new_task


@app.get("/api/v1/tasks")
def get_tasks(db: Session = Depends(get_db)):

    return crud.get_tasks(db)


@app.delete("/api/v1/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):

    task = crud.delete_task(db, task_id)

    if not task:
        raise HTTPException(status_code=404, detail="Task not found")

    return {"message": "Task deleted"}