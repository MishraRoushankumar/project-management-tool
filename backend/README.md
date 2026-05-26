# 📌 Project Management Tool

A **Node.js + Express + MongoDB** backend for a project management tool. Currently, it includes basic **user management** functionality, with more features (tasks, projects, dashboards) planned for future development.  

---

## 🚀 Features (Current & Planned)

- ✅ User registration & management (`/users`)  
- ✅ REST API using Express.js  
- ✅ MongoDB integration with Mongoose  
- 🔜 Task & project management APIs  
- 🔜 Authentication & authorization (JWT)  
- 🔜 Frontend (React/Vanilla JS) for user interface  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Dev Tools:** Nodemon for auto-reload  
- **Version Control:** Git & GitHub  

---

## 📂 Project Structure

```
project-management-tool/
│── public/            # Static assets (future frontend assets)
│── src/               # Source code
│   ├── routes/        # Express routes (users.js, future tasks.js, projects.js)
│   ├── models/        # Mongoose models (User.js, etc.)
│   ├── controllers/   # Business logic (future expansion)
│   ├── index.js       # Entry point of the app
│── PRD.md             # Product Requirements Document
│── package.json       # Dependencies & scripts
│── .gitignore         # Ignored files
│── .prettierrc        # Code formatting rules
```

---

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/MishraRoushankumar/project-management-tool.git
   cd project-management-tool
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the project root:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/project-management-tool
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Or for production:
   ```bash
   npm start
   ```

5. Server will run on:
   ```
   http://localhost:3000
   ```

---

## 📖 API Endpoints

### 👤 Users

| Method | Endpoint      | Description         |
|--------|--------------|---------------------|
| POST   | `/users`     | Create a new user   |
| GET    | `/users`     | Get all users       |
| GET    | `/users/:id` | Get user by ID      |
| PUT    | `/users/:id` | Update user details |
| DELETE | `/users/:id` | Delete user         |

---

## 📌 Roadmap

- [ ] Implement task & project routes  
- [ ] Add JWT-based authentication  
- [ ] Integrate frontend (React or plain HTML/JS)  
- [ ] Role-based access (Admin, Member)  
- [ ] Deploy on cloud (Render/Heroku/Vercel + MongoDB Atlas)  

---

## 🤝 Contributing

Contributions are welcome!  

1. Fork the repo  
2. Create a new branch (`feature/my-feature`)  
3. Commit your changes  
4. Push to your branch  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify.  

---

## 👤 Author

**Roushankumar Mishra**  
🔗 [GitHub Profile](https://github.com/MishraRoushankumar)  
