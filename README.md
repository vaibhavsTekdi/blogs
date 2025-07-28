# Blogging Platform API

A RESTful API for a blogging platform with user authentication, role-based access control, and CRUD operations for posts, comments, and categories.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Swagger UI

---

## 🔧 Installation

```bash
# Clone the repo
git clone https://github.com/vaibhavsTekdi/blogs
cd blogs

# Install dependencies
npm install
```

---

## 🌐 MongoDB Connection

Update your `.env` file with your MongoDB connection string:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/blogging-db
JWT_SECRET=your_jwt_secret
```

---

## ▶️ Running the Server

```bash
# Start the server
npm run dev
```

Visit: [http://localhost:5000](http://localhost:5000)

Swagger Docs: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)

---

## 📬 API Endpoints

### 🔐 Authentication

| Method | Endpoint            | Description          |
|--------|---------------------|----------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get token |

---

### 👤 User

| Method | Endpoint         | Description            |
|--------|------------------|------------------------|
| GET    | `/api/users/me`  | Get logged-in user     |
| GET    | `/api/admin/users` | Admin: Get all users  |

---

### 📚 Posts

| Method | Endpoint                            | Description                      |
|--------|-------------------------------------|----------------------------------|
| POST   | `/api/posts`                        | Create a blog post (auth)        |
| GET    | `/api/posts`                        | Fetch all blog posts             |
| POST   | `/api/posts/:postId/comments`       | Add comment to post (auth)       |
| GET    | `/api/posts/category/:categoryId`   | Fetch posts by category          |
| GET    | `/api/posts/trending`               | Fetch top 5 most commented posts |

---

### 💬 Comments

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/comments`  | Get all comments         |

---

### 🏷️ Categories

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/api/categories`| Create category (auth)   |
| GET    | `/api/categories`| List all categories      |

---

## 🧪 API Documentation

Visit [http://localhost:5000/api-docs](http://localhost:5000/api-docs) for Swagger UI documentation.

---

## 📁 Folder Structure

```
.
├── app.js
├── .env
├── routes/
├── controllers/
├── models/
├── middleware/
├── config/
└── api-collection/
```

---

## 🧑‍💻 Author

Made with ❤️ by [Vaibhav Shinde](https://github.com/vaibhavsTekdi)
