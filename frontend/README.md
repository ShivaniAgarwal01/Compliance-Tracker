# 🚀 Compliance Tracker

A full-stack web application to manage clients and track their compliance tasks efficiently.
Built with a focus on clean UI, real-time updates, and scalable architecture.

---

## 🌐 Live Demo

🔗 https://compliance-tracker-rho.vercel.app/
🔗 https://compliance-tracker-lf68.onrender.com

---

## 📌 Features

### 👥 Client Management

* View all clients
* Select a client to view associated tasks
* Real-time client search 🔍
* Sort clients (A-Z / Z-A)

### ✅ Task Management

* Add compliance tasks for each client
* View all tasks with filters
* Filter by:

  * Status
  * Category
* Sort tasks by due date

### 📊 Dashboard Insights

* Total Tasks
* Pending Tasks
* Overdue Tasks ⚠️

### 🎨 UI/UX

* Minimalistic and clean design
* Responsive layout
* Sidebar + main content structure
* Smooth user interactions

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ShivaniAgarwal01/Compliance-Tracker.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Run server:

```bash
npm run dev
```

---

### 3️⃣ Seed Initial Data (Important)

```bash
node seed.js
```

This will:

* Add sample clients
* Add sample tasks

---

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 📂 Project Structure

```
compliance-tracker/
│
├── backend/
│   ├── config/
│   ├── controllers/    
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── seed.js
│
├── frontend/
│   ├── components/ 
│   ├── App.jsx
│   └── api.js
│   └── main.jsx
```

---

## 🧠 Key Concepts Used

* REST API Design
* State Management using React Hooks
* Component-based architecture
* Client-side filtering & sorting
* MongoDB schema design
* Async/Await for API handling

---

## 🚀 Future Improvements

* Task status toggle (Complete / Pending)
* Notifications & alerts 🔔
* Charts & analytics dashboard 📈
* Authentication (Login/Signup)
* Role-based access control

---

## 👩‍💻 Author

**Shivani Agarwal**
B.Tech CSE, LNMIIT Jaipur

* 💻 Full Stack Developer
* 🎨 UI/UX Designer

---


## 📬 Feedback

If you have suggestions or feedback, feel free to connect!

---
