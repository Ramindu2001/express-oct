# Student Management System - Express.js + MySQL CRUD

This is a professional, beginner-friendly **RESTful CRUD API** built using **Node.js**, **Express.js**, and **MySQL**. This project demonstrates how to structure a backend application using the **Routes -> Controllers -> DB Connection** architecture.

## 🚀 Key Features
* **Create**: Save student data (Name, Age, GPA) to the database.
* **Read**: Retrieve a list of all students or search for specific students by name.
* **Update**: Modify student details based on their unique ID.
* **Delete**: Remove student records from the system.
* **Environment Security**: Uses `.env` for managing sensitive database credentials.

---

## 📂 Project Architecture
```text
expressjs-crud/
├── db/
│   └── db.js              # MySQL connection pool logic
├── controllers/
│   └── studentController.js # Handles business logic and SQL execution
├── routes/
│   └── studentRoutes.js   # Defines API endpoints and maps to controllers
├── .env                   # Database configuration (Excluded from Git)
├── index.js               # Entry point of the server
└── package.json           # Dependencies (express, mysql2, dotenv)
