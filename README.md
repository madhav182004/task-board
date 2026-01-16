# 🗂️ Project Task Board (Kanban)

A **real-time Kanban-style task management application** built using **React, Firebase, and Vercel**, featuring authentication, drag-and-drop task movement, and a clean, modern UI.

## 🚀 Live Demo

🔗 **Hosted Application:** https://task-board-hazel-eight.vercel.app
🔗 **GitHub Repository:** https://github.com/madhav182004/task-board

---

## 📌 Project Overview

The **Project Task Board** allows users to manage tasks efficiently using a Kanban workflow.  
Users can create tasks, assign due dates, and move tasks across different stages (**To Do, In Progress, Done**) with **real-time updates** and **drag-and-drop interaction**.

This project was developed as part of a technical assessment and focuses on **clean architecture, usability, and real-time functionality**.

---

## ✨ Features

### 🔐 Authentication
- Email & Password Signup
- Secure Login & Logout
- Protected routes for authenticated users

### 🧩 Task Management
- Create new tasks with title and due date
- Kanban board with:
  - **To Do**
  - **In Progress**
  - **Done**
- Move tasks between columns using **drag and drop**
- Real-time task updates using Firestore listeners

### 🎨 UI / UX
- Modern, responsive UI using **Tailwind CSS**
- Smooth drag-and-drop experience
- Status badges for tasks
- Task count per column
- Clean modal-based task creation

---

## 🛠️ Tech Stack

### Frontend
- **React (Vite)**
- **Tailwind CSS**
- **@hello-pangea/dnd** (Drag & Drop)

### Backend / Services
- **Firebase Authentication**
- **Firebase Firestore (Real-time database)**

### Hosting
- **Vercel**


---

## 🔥 Real-Time Functionality

The application uses **Firestore `onSnapshot` listeners**, ensuring:
- Instant UI updates when tasks are created or moved
- Synchronization across multiple browser tabs
- No manual page refresh required

---

## ⚙️ Environment Variables

Firebase configuration is managed securely using environment variables.

Example `.env` file (Vite format):

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

⚠️ .env is added to .gitignore and not pushed to GitHub.

# Clone the repository
git clone https://github.com/madhav182004/task-board

# Navigate to project folder
cd project-task-board

# Install dependencies
npm install

# Start development server
npm run dev


📦 Deployment

The application is deployed using Vercel.

Steps:

1. Push code to GitHub

2. Import repository into Vercel

3. Add environment variables in Vercel dashboard

4. Deploy 🚀

🧑‍💻 Author

[Madhav Mundhra]

📄 License

This project is for educational and assessment purposes.

⭐ If you like this project, feel free to star the repository!

---
