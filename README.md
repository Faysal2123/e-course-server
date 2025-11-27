# 🎓 E-Courses Server

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/) 
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/) 
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)  
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 💡 Project Overview
**E-Courses Server** is the backend for the E-Courses application.  
It is built with **Node.js**, **Express**, and **MongoDB**, providing secure and efficient RESTful APIs to manage courses, users, reviews, bookings, notes, and course materials.

---

## ✨ Features
- **Course Management**: Create, read, update, delete course information.  
- **User Management**: Handle registration, roles, and profiles.  
- **Review System**: Manage course reviews.  
- **Session Bookings**: Users can book sessions.  
- **Personal Notes**: CRUD operations for user notes.  
- **Course Materials**: Manage materials associated with courses.  

---

## 📌 API Endpoints

### 1. Courses
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| GET | `/course` | Get all courses | Read |
| GET | `/courseDetails/:id` | Get course details by ID | Read |
| POST | `/course` | Add new course | Create |
| GET | `/course/:email` | Get courses by tutor email | Read |
| GET | `/course/email/:email?status=...` | Get courses by tutor email with optional status | Read |
| PATCH | `/sessions/status/:id` | Update session status (approve/reject, feedback, fees) | Update |
| DELETE | `/course/delete/:id` | Delete a course by ID | Delete |

### 2. Reviews
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| GET | `/reviews` | Get all course reviews | Read |

### 3. Users
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| POST | `/users` | Register a new user | Create |
| GET | `/user/:email` | Get user role by email | Read |
| GET | `/users` | Get all registered users | Read |
| PATCH | `/users/:id` | Update user role | Update |

### 4. Bookings
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| GET | `/bookedSession/:email` | Get sessions booked by a user | Read |
| POST | `/bookings` | Book a new session | Create |

### 5. Notes
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| POST | `/note` | Create a personal note | Create |
| GET | `/note/:email` | Get notes by user email | Read |
| DELETE | `/note/:id` | Delete note by ID | Delete |
| PUT | `/note/:id` | Update note by ID | Update |

### 6. Materials
| Method | Endpoint | Description | Operation |
|--------|---------|-------------|-----------|
| POST | `/materials` | Add new course materials | Create |
| GET | `/materials/:email` | Get materials by tutor email | Read |
| GET | `/materials` | Get all course materials | Read |
| DELETE | `/materials/:id` | Delete material by ID | Delete |
| PATCH | `/materials/:id` | Update material by ID | Update |

---

## 🛠 Technologies Used
- **Node.js**  
- **Express.js**  
- **MongoDB** (via `mongodb` driver)  
- **Mongoose** (for schema definition & validation)  
- **CORS**  
- **Dotenv**  

---

## ⚙️ Setup Instructions

1. **Clone the repository**
```bash
git clone <repository_url>
cd e-courses-server
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**  
Create a `.env` file in the root directory:
```
PORT=5000
DB_USER=<your_db_user>
DB_PASSWORD=<your_db_password>
DB_NAME=<your_db_name>
JWT_SECRET=<your_jwt_secret>
```

4. **Run the server**
```bash
npm start
```
The server will run at `http://localhost:5000` (or the port specified in `.env`).

---

## 🔗 Links
- **Frontend Repository:** https://github.com/Faysal2123/e-courses-client?tab=readme-ov-file  
- **Live Demo:** [E-Courses Live](#)  

---

## 👨‍💻 Author
**Mohammad Foysal**  
Backend & MERN Stack Developer  

