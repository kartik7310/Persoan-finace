# 💰 Personal Finance Tracker

A full-stack MERN (MongoDB, Express.js, React 19, Node.js) web application for personal expense tracking and financial management. Easily monitor your incomes, track expenses, calculate net balances, and filter transaction histories through an intuitive, modern dashboard.

---

## 🚀 Features

- 🔐 **User Authentication**: Secure Signup & Login powered by JWT (JSON Web Tokens) and hashed passwords using `bcrypt`.
- 📊 **Financial Dashboard**: Instant view of Total Income, Total Expenses, and Net Balance with summary cards.
- 💵 **Transaction Management (CRUD)**: Create, view, update, and delete income and expense records.
- 🔍 **Advanced Filtering & Search**: Filter transactions by type (`income`, `expense`), category (`food`, `rent`, `freelance`, `sallary`), search terms, and date ranges.
- 📄 **Pagination Support**: Smooth browsing through transaction logs with clean pagination control.
- 🛡️ **Security & Middlewares**: Express app secured with `helmet`, CORS configured, logging via `morgan`, and environment variable decoupling.
- ⚡ **Modern Stack**: Built using React 19, Vite 8, React Router v7, and Tailwind CSS v4.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Linter**: [Oxlint](https://github.com/oxc-project/oxc)

### Backend
- **Runtime**: Node.js (ES Modules)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) via [Mongoose ORM](https://mongoosejs.com/)
- **Authentication**: JWT (`jsonwebtoken`) & `bcrypt` / `bcryptjs`
- **Security & Utilities**: `helmet`, `cors`, `morgan`, `dotenv`, `nodemon`

---

## 📂 Project Structure

```text
Persoan-finace/
├── client/                     # Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/             # Images and SVG icons
│   │   ├── components/         # Reusable React components
│   │   │   ├── dashboard/      # Dashboard Header, Tables, Filters, Modals, Summary Cards
│   │   │   └── ProtectedRoute.jsx
│   │   ├── config/             # Axios/Fetch API base configuration
│   │   ├── pages/              # Landing, Login, Signup, Dashboard
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example            # Sample frontend environment config
│   ├── .gitignore
│   └── package.json
│
├── server/                     # Backend (Node.js + Express)
│   ├── src/
│   │   ├── config/             # Database connection setup
│   │   ├── controllers/        # Auth, Transaction, Health controllers
│   │   ├── middlewares/        # JWT Protect & Error handling middlewares
│   │   ├── models/             # Mongoose User & Transaction schemas
│   │   ├── routes/             # Auth, Transaction, Health API routes
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example            # Sample backend environment config
│   ├── .gitignore
│   └── package.json
│
└── README.md
```

---

## 🔑 Environment Variables Setup

> ⚠️ **Security Notice**: `.env` files contain sensitive credentials and are ignored by Git (`.gitignore`). Never commit production secrets to Git repositories.

Templates are provided in `.env.example` files for both frontend and backend.

### 1. Server Environment (`server/.env`)

Copy `server/.env.example` to `server/.env` and update the values:

```bash
cp server/.env.example server/.env
```

```env
PORT=3000
DB_url=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

### 2. Client Environment (`client/.env`)

Copy `client/.env.example` to `client/.env` and update the values:

```bash
cp client/.env.example client/.env
```

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- `npm` or `yarn` package manager

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kartik7310/Persoan-finace.git
   cd Persoan-finace
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   # Create and configure server/.env as shown above
   npm run dev
   ```
   The backend server will start at `http://localhost:3000`.

3. **Setup Frontend**
   Open a new terminal window:
   ```bash
   cd client
   npm install
   # Create and configure client/.env as shown above
   npm run dev
   ```
   The frontend app will be running at `http://localhost:5173`.

---

## 📡 API Endpoints Summary

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/health` | Server Health Check | ❌ |
| `POST` | `/api/auth/signup` | Register a new user | ❌ |
| `POST` | `/api/auth/login` | Authenticate user & get JWT token | ❌ |
| `GET` | `/api/transactions` | Fetch user transactions (with filters & pagination) | ✅ |
| `POST` | `/api/transactions` | Create a new transaction (Income / Expense) | ✅ |
| `PUT` | `/api/transactions/:id` | Update an existing transaction | ✅ |
| `DELETE` | `/api/transactions/:id` | Delete a transaction | ✅ |

### 📖 Postman API Documentation

For interactive API testing and request schemas, view the published Postman Collection:
👉 [Postman API Documentation](https://documenter.getpostman.com/view/38250883/2sBYHQ1N1E)

---

## 📜 Available Scripts

### Server (`server/package.json`)
- `npm run dev`: Start backend server with `nodemon` auto-reloading.
- `npm start`: Start backend server with `node`.

### Client (`client/package.json`)
- `npm run dev`: Start Vite development server.
- `npm run build`: Build production assets.
- `npm run lint`: Lint code with `oxlint`.
- `npm run preview`: Preview production build locally.

---

## 📄 License

This project is open source and available for personal or educational use.
