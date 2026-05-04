# 💬 Mini Message Board

> A clean, minimal full-stack message board application for sharing thoughts instantly.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&style=for-the-badge" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&style=for-the-badge" alt="Vite 8">
  <img src="https://img.shields.io/badge/Express-5-000000?logo=express&style=for-the-badge" alt="Express 5">
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&style=for-the-badge" alt="MongoDB">
  <img src="https://img.shields.io/badge/Node.js-ES6+-339933?logo=node.js&style=for-the-badge" alt="Node.js">
</p>

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| ✨ **CRUD Operations** | Create, Read, Update, Delete messages seamlessly |
| 🔔 **Toast Notifications** | Real-time feedback with success/error alerts |
| 📝 **Inline Editing** | Edit messages in a beautiful modal dialog |
| ⌨️ **Keyboard Shortcuts** | Press `Enter` to submit, `Shift+Enter` for new line |
| 📱 **Responsive Design** | Works perfectly on desktop, tablet, and mobile |
| 🎨 **Modern UI** | Clean interface with Lucide icons |
| ⚡ **Fast Performance** | Vite-powered HMR and optimized builds |
| 🔒 **CORS Enabled** | Secure cross-origin requests |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐ │
│  │   React 19  │◄──►│    Vite     │◄──►│   Lucide Icons      │ │
│  │   (Hooks)   │    │   (Build)   │    │   (UI Icons)        │ │
│  └──────┬──────┘    └─────────────┘    └─────────────────────┘ │
│         │                                                        │
│         │ HTTP Requests (Axios/Fetch)                           │
│         ▼                                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ CORS
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API LAYER                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────────────┐ │
│  │   Express   │◄──►│ Controllers │◄──►│   Mongoose Models   │ │
│  │   Server    │    │   (MVC)     │    │   (MongoDB)         │ │
│  └─────────────┘    └─────────────┘    └─────────────────────┘ │
│         │                                                        │
│         │ MongoDB Connection                                     │
│         ▼                                                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATABASE LAYER                              │
│                    MongoDB (Atlas/Local)                         │
│              ┌─────────────────────────┐                         │
│              │    messages Collection  │                         │
│              │  - text (String)        │                         │
│              │  - createdAt (Date)     │                         │
│              │  - updatedAt (Date)     │                         │
│              └─────────────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| ⚛️ React | 19.2.5 | UI Framework |
| ⚡ Vite | 8.0.10 | Build Tool & Dev Server |
| 🎨 CSS3 | Native | Styling |
| 🔷 Lucide React | 1.14.0 | Icon Library |
| 📡 Axios | 1.16.0 | HTTP Client |
| 🔍 ESLint | 10.2.1 | Code Quality |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| 🟢 Node.js | 18+ | Runtime |
| 🚂 Express | 5.2.1 | Web Framework |
| 🍃 Mongoose | 9.6.1 | MongoDB ODM |
| 🌐 CORS | 2.8.6 | Cross-Origin Requests |
| 🔐 dotenv | 17.4.2 | Environment Variables |

---

## 📦 Project Structure

```
📁 Mini-Message-Board/
├── 📁 backend/                    # Express.js API Server
│   ├── 📁 config/
│   │   └── db.js                  # MongoDB connection config
│   ├── 📁 controllers/
│   │   └── messageController.js   # Business logic (CRUD)
│   ├── 📁 models/
│   │   └── Messages.js            # Mongoose schema
│   ├── 📁 routes/
│   │   └── messageRoutes.js       # API route definitions
│   ├── 📄 .env                    # Environment variables
│   ├── 📄 package.json            # Dependencies & scripts
│   └── 📄 server.js               # Entry point
│
├── 📁 frontend/                   # React + Vite Client
│   ├── 📁 src/
│   │   ├── 📄 App.jsx             # Main component (all features)
│   │   ├── 📄 main.jsx            # React app entry
│   │   └── 📄 index.css           # Global styles
│   ├── 📄 .env                    # API URL config
│   ├── 📄 index.html              # HTML template
│   ├── 📄 package.json            # Dependencies & scripts
│   └── 📄 vite.config.js          # Vite configuration
│
├── 📄 .gitignore                  # Git ignore rules
└── 📄 README.md                   # This file
```

---

## ⚡ Quick Start

### 📋 Prerequisites

- ✅ Node.js **18+** ([Download](https://nodejs.org/))
- ✅ MongoDB instance:
  - 🏠 **Local:** [Install MongoDB Community](https://www.mongodb.com/try/download/community)
  - ☁️ **Cloud:** [MongoDB Atlas](https://www.mongodb.com/atlas) (Free tier available)

### 🚀 Installation

#### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd Mini-Message-Board
```

#### 2️⃣ Install Dependencies

```bash
# Install backend dependencies
cd backend && npm install

# Install frontend dependencies
cd ../frontend && npm install
```

#### 3️⃣ Configure Environment Variables

Create `.env` files in both directories:

🔧 **Backend** (`backend/.env`):
```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/mini-message-board
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/mini-message-board
```

🎨 **Frontend** (`frontend/.env`):
```env
VITE_BACKEND_API_URL=http://localhost:8000/messages
```

#### 4️⃣ Start Development Servers

```bash
# Terminal 1 - Start Backend (runs on port 8000)
cd backend && npm run dev

# Terminal 2 - Start Frontend (runs on port 5173)
cd frontend && npm run dev
```

🎉 **Open** `http://localhost:5173` in your browser!

---

## 📡 API Documentation

### Base URL
```
http://localhost:8000/messages
```

### Endpoints

#### 🔵 GET /messages
Retrieve all messages (newest first).

**Response:**
```json
[
  {
    "_id": "6645a1b2c3d4e5f6a7b8c9d0",
    "text": "Hello, World!",
    "createdAt": "2026-05-04T12:00:00.000Z",
    "updatedAt": "2026-05-04T12:00:00.000Z"
  }
]
```

#### 🟢 POST /messages
Create a new message.

**Request Body:**
```json
{
  "text": "My first message!"
}
```

**Response:** `201 Created`
```json
{
  "_id": "6645a1b2c3d4e5f6a7b8c9d0",
  "text": "My first message!",
  "createdAt": "2026-05-04T12:00:00.000Z",
  "updatedAt": "2026-05-04T12:00:00.000Z"
}
```

#### 🟡 PUT /messages/:id
Update an existing message.

**Request Body:**
```json
{
  "text": "Updated message text"
}
```

**Response:**
```json
{
  "_id": "6645a1b2c3d4e5f6a7b8c9d0",
  "text": "Updated message text",
  "createdAt": "2026-05-04T12:00:00.000Z",
  "updatedAt": "2026-05-04T12:30:00.000Z"
}
```

#### 🔴 DELETE /messages/:id
Delete a message.

**Response:**
```json
{
  "message": "Deleted successfully"
}
```

---

## 📝 Available Scripts

### 🖥️ Backend Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start server with watch mode (Node.js --watch) |
| `npm test` | 🧪 Run tests (placeholder) |

### ⚛️ Frontend Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start Vite development server |
| `npm run build` | 📦 Build for production |
| `npm run preview` | 👀 Preview production build locally |
| `npm run lint` | 🔍 Run ESLint for code quality |

---

## 🎯 Component Architecture

### React Components Flow

```
┌─────────────────────────────────────────────────────────┐
│                       App.jsx                            │
│  ┌─────────────────────────────────────────────────────┐ │
│  │                   State Management                   │ │
│  │  • messages (array)                                 │ │
│  │  • inputMessage (string)                            │ │
│  │  • isLoading (boolean)                              │ │
│  │  • toast (object)                                   │ │
│  │  • editingMessage (object)                          │ │
│  │  • editText (string)                                │ │
│  └─────────────────────────────────────────────────────┘ │
│                          │                                │
│     ┌────────────────────┼────────────────────┐           │
│     ▼                    ▼                    ▼           │
│  ┌────────┐         ┌──────────┐        ┌──────────┐     │
│  │ Header │         │ Input    │        │ Messages │     │
│  │ Section│         │ Section  │        │ Section  │     │
│  └────────┘         └──────────┘        └──────────┘     │
│                            │               │            │
│                            ▼               ▼            │
│                      ┌──────────┐    ┌──────────┐       │
│                      │ Message  │    │ Message  │       │
│                      │ Form     │    │ Cards    │       │
│                      └──────────┘    └──────────┘       │
│                                             │            │
│                            ┌────────────────┘            │
│                            ▼                             │
│                     ┌──────────────┐                       │
│                     │ Edit Modal   │                       │
│                     │ (Conditional)│                       │
│                     └──────────────┘                       │
│                                                          │
│                     ┌──────────────┐                       │
│                     │ Toast        │                       │
│                     │ Notification │                       │
│                     └──────────────┘                       │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 UI Features

### 📝 Message Input
- Auto-expanding textarea
- Character validation
- Loading spinner on submit
- Enter-to-submit shortcut

### 💬 Message Cards
- Unique ID display (last 4 characters)
- Timestamp formatting
- Hover actions (Edit/Delete)
- Smooth transitions

### ✏️ Edit Modal
- Focus trap on open
- Click outside to close
- Save/Cancel actions
- Input validation

### 🔔 Toast Notifications
- Success (green) and Error (red) variants
- Auto-dismiss after 3 seconds
- Smooth fade animations

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] ✅ Create a new message
- [ ] ✅ View all messages
- [ ] ✅ Edit a message
- [ ] ✅ Delete a message
- [ ] ✅ Test empty input validation
- [ ] ✅ Test keyboard shortcuts (Enter to submit)
- [ ] ✅ Test responsive design on mobile
- [ ] ✅ Verify toast notifications appear

---

## 🚢 Deployment

### Backend (Vercel/Railway/Render)
1. Set environment variables in dashboard
2. Configure `PORT` to use `process.env.PORT`
3. Deploy from GitHub repository

### Frontend (Vercel/Netlify)
1. Build command: `npm run build`
2. Output directory: `dist`
3. Set environment variable:
   ```
   VITE_BACKEND_API_URL=https://your-api-url.com/messages
   ```

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create a feature branch: `git checkout -b feature/amazing-feature`
3. 💾 Commit changes: `git commit -m 'Add amazing feature'`
4. 📤 Push to branch: `git push origin feature/amazing-feature`
5. 🔃 Open a Pull Request

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 👨‍💻 Author

Built with ❤️ using React, Express, and MongoDB.

---

<p align="center">
  🌟 Star this repository if you found it helpful! 🌟
</p>
