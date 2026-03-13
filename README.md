# 🚀 Anything.ai – Backend Developer Intern Assignment

## 📌 Project Overview

This project is a **Scalable REST API with Authentication & Role-Based Access Control (RBAC)** built using:

- FastAPI (Backend)
- JWT Authentication
- Password Hashing (bcrypt)
- Database (PostgreSQL/MySQL/MongoDB)
- React.js (Frontend)
- CRUD Operations
- Swagger API Documentation

It demonstrates secure backend architecture with a simple frontend UI.

---

## 🏗 Architecture

Frontend (React)
        ↓
FastAPI Backend
        ↓
JWT Authentication
        ↓
Database

---

## 🔐 Features Implemented

### ✅ Authentication
- User Registration
- User Login
- Password Hashing (bcrypt)
- JWT Token Generation
- Protected Routes

### ✅ Role-Based Access
- User Role
- Admin Role
- Secure Endpoints

### ✅ CRUD Operations
- Create Task
- Read Tasks
- Update Task
- Delete Task

### ✅ Security
- JWT Authentication
- Input Validation (Pydantic)
- CORS Configuration
- Secure Token Handling

### ✅ API Documentation
- Swagger UI available at:
http://127.0.0.1:8000/docs

---

## 🗄 Database Schema

### Users Table
- id
- email
- password (hashed)
- role

### Tasks Table
- id
- title
- owner_id (Foreign Key)

---

## 🖥 Frontend Features

- Login Page
- Register Page
- Protected Dashboard
- Add Task
- Edit Task
- Delete Task
- JWT-based Authentication
- Clean UI

---

## 🛠 Tech Stack

### Backend:
- FastAPI
- Uvicorn
- SQLAlchemy
- Pydantic
- Passlib (bcrypt)
- Python-JOSE

### Frontend:
- React.js
- Axios
- React Router
- CSS

---

## 📦 Installation Guide

### 1️⃣ Clone Repository


---

### 2️⃣ Backend Setup

Backend runs at:
http://127.0.0.1:8000

Swagger Docs:
http://127.0.0.1:8000/docs

---

### 3️⃣ Frontend Setup

Frontend runs at:
http://localhost:3000

---

## 🔑 Environment Variables

Create a `.env` file inside backend:



---

## 📌 API Endpoints

### Authentication
- POST /api/v1/register
- POST /api/v1/login

### Tasks
- GET /api/v1/tasks
- POST /api/v1/tasks
- PUT /api/v1/tasks/{id}
- DELETE /api/v1/tasks/{id}

---

## 🧠 Scalability

The project is structured to support:

- Modular architecture
- API versioning
- Microservices
- Redis caching
- Docker deployment
- Cloud hosting
- Load balancing

---

## 👨‍💻 Author

Bhuvan Chauhan  
Backend Developer Intern Assignment  
GitHub: <your-github-link>

---

## 📈 Future Improvements

- Refresh Tokens
- Logging System
- Unit Testing
- Dockerization
- CI/CD Pipeline
- Production Deployment