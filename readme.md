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
│   │   │   ├── dashboard/      # Dashboard Header, Charts, Tables, Filters, Modals
│   │   │   └── ProtectedRoute.jsx
│   │   ├── config/             # API base configuration
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
│   │   ├── middlewares/        # JWT protection and error handling
│   │   ├── models/             # Mongoose User and Transaction schemas
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

> ⚠️ **Security Notice**: `.env` files contain sensitive credentials and should be ignored by Git using `.gitignore`. Never commit production secrets to Git repositories.

Environment templates are provided in `.env.example` files for both the frontend and backend.

### 1. Server Environment (`server/.env`)

The backend requires environment variables for the server port, MongoDB connection, and JWT authentication.

**Windows PowerShell:**

Run these commands from the project root directory:

```powershell
Copy-Item server/.env.example server/.env
```

**Windows Command Prompt:**

```cmd
copy server\.env.example server\.env
```

**macOS/Linux:**

```bash
cp server/.env.example server/.env
```

Open `server/.env` and configure the values:

```env
PORT=3000
DB_url=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_here
```

Replace the MongoDB placeholders with your actual database credentials. The variable names must match those used by your backend code.

For MongoDB Atlas, ensure your IP address is allowed under Network Access.

### 2. Client Environment (`client/.env`)

The frontend needs the backend API URL.

**Windows PowerShell:**

```powershell
Copy-Item client/.env.example client/.env
```

**Windows Command Prompt:**

```cmd
copy client\.env.example client\.env
```

**macOS/Linux:**

```bash
cp client/.env.example client/.env
```

Open `client/.env` and configure:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Make sure this matches the variable name in `client/src/config/api.js` and the API prefix configured in `server/src/app.js`.

**Important:** If either `.env` file already exists, do not overwrite it blindly. Update its values instead.

---

## 🚀 Getting Started

### Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- `npm` package manager (included with Node.js)
- [Git](https://git-scm.com/) (optional, for cloning the repository)

Verify your installation:

```bash
node --version
npm --version
```

### Installation and Setup

#### 1. Clone the Repository

Open PowerShell or a terminal and run:

```bash
git clone https://github.com/kartik7310/Persoan-finace.git
cd Persoan-finace
```

If you already have the project folder, open your terminal inside that folder and skip the cloning step.

#### 2. Install and Configure the Backend

From the project root, run:

```powershell
cd server
npm install
```

Create and configure `server/.env` using the [Environment Variables Setup](#-environment-variables-setup) instructions above.

Start the backend server:

```powershell
npm run dev
```

The backend should run at:

```text
http://localhost:3000
```

Keep this terminal running.

If `npm run dev` is unavailable, check the scripts defined in `server/package.json`:

```powershell
npm run
```

Use the available development or start script.

#### 3. Install and Configure the Frontend

Open a **second terminal** in the project root. Do not stop the backend terminal.

Navigate to the frontend directory:

```powershell
cd client
npm install
```

Create and configure `client/.env` using the [Environment Variables Setup](#-environment-variables-setup) instructions above.

Start the frontend development server:

```powershell
npm run dev
```

Vite will display a local development URL, typically:

```text
http://localhost:5173
```

Open the URL displayed in your terminal.

#### 4. Access the Application

Once both servers are running:

1. Open the frontend URL in your browser.
2. Register a new account.
3. Log in using your registered credentials.
4. View the financial dashboard.
5. Add income and expense transactions.
6. Filter transactions by type, category, search terms, and date range.
7. Update or delete existing transactions.
8. Review the income, expense, and net balance summary cards.

### Quick Start Reference

| Service | Directory | Command | Default URL |
|---|---|---|---|
| Backend | `server/` | `npm run dev` | `http://localhost:3000` |
| Frontend | `client/` | `npm run dev` | `http://localhost:5173` |

**Note:** Run the frontend and backend in separate terminals. The URLs above assume the default ports and API configuration shown in this README.

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

- `npm run dev`: Start the backend server with Nodemon auto-reloading.
- `npm start`: Start the backend server with Node.js.

### Client (`client/package.json`)

- `npm run dev`: Start the Vite development server.
- `npm run build`: Build production assets.
- `npm run lint`: Lint code with Oxlint.
- `npm run preview`: Preview the production build locally.

---

## 📄 License

This project is open source and available for personal or educational use.
