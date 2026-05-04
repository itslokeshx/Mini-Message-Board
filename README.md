# Mini Message Board

A clean, minimal full-stack message board application for sharing thoughts instantly.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Express](https://img.shields.io/badge/Express-5-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb)

## Features

- Create, read, update, and delete messages
- Real-time toast notifications
- Edit messages in a modal
- Keyboard support (Enter to submit)
- Responsive design
- Clean, modern UI with Lucide icons

## Tech Stack

**Frontend:** React 19 + Vite + Axios + Lucide React
**Backend:** Node.js + Express + MongoDB (Mongoose)

## Quick Start

### Prerequisites
- Node.js 18+
- MongoDB instance (local or Atlas)

### Installation

1. **Clone & install dependencies:**
```bash
cd backend && npm install
cd ../frontend && npm install
```

2. **Environment variables:**

Backend `.env`:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Frontend `.env`:
```env
VITE_BACKEND_API_URL=http://localhost:8000/messages
```

3. **Start development servers:**
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

The app will be available at `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/messages` | Fetch all messages |
| POST | `/messages` | Create new message |
| PUT | `/messages/:id` | Update message |
| DELETE | `/messages/:id` | Delete message |

## Project Structure

```
Mini-Message-Board/
├── backend/
│   ├── config/        # Database configuration
│   ├── controllers/   # Route controllers
│   ├── models/        # Mongoose models
│   ├── routes/        # API routes
│   └── server.js      # Entry point
├── frontend/
│   └── src/
│       ├── App.jsx    # Main component
│       ├── index.css  # Styles
│       └── main.jsx   # Entry point
└── README.md
```

## Scripts

**Backend:**
- `npm run dev` - Start with watch mode

**Frontend:**
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

ISC
