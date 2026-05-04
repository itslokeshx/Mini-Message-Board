<div align="center">

```
┌─────────────────────────────────────────┐
│                                         │
│   💬  M I N I   M E S S A G E   B O A R D  │
│                                         │
│   A lightweight REST API for messages  │
│                                         │
└─────────────────────────────────────────┘
```

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

</div>

A simple, fast, and lightweight REST API for managing messages. Built with modern ES modules, Express.js, and MongoDB.


## Quick Start

Get the API running in under 2 minutes:

```bash
# 1. Clone and navigate to the project
git clone <repository-url>
cd Mini-Message-Board/backend

# 2. Install dependencies
npm install

# 3. Configure environment
echo "MONGO_URL=mongodb://localhost:27017/mini-message-board
PORT=8000" > .env

# 4. Start the server
npm run dev
```

The API will be available at `http://localhost:8000`

## Features

| Feature | Description |
|---------|-------------|
| ✅ **CRUD Operations** | Create, Read, Update, Delete messages with ease |
| 🔄 **RESTful API** | Clean, predictable resource-oriented URLs |
| 🗄️ **MongoDB Integration** | Persistent storage with Mongoose ODM |
| ⚡ **Auto-reload Dev Mode** | `node --watch` for instant updates during development |
| 🔐 **Input Validation** | Proper error handling for invalid requests |
| 🎯 **Unique IDs** | Numeric ID system for message identification |
| 📦 **ES Modules** | Modern JavaScript with `import/export` syntax |

## Tech Stack

| Component | Technology | Version |
|-----------|------------|---------|
| **Runtime** | Node.js | v18+ (ES Modules) |
| **Framework** | Express.js | ^5.2.1 |
| **Database** | MongoDB | 4.x+ |
| **ODM** | Mongoose | ^9.6.1 |
| **Config** | dotenv | ^17.4.2 |

## Project Structure

```
📁 Mini-Message-Board/
│
├── 📁 backend/
│   ├── 📁 config/
│   │   └── 📄 db.js              → MongoDB connection setup
│   ├── 📁 controllers/
│   │   └── 📄 messageController.js → CRUD business logic
│   ├── 📁 models/
│   │   └── 📄 Messages.js        → Mongoose schema
│   ├── 📁 routes/
│   │   └── 📄 messageRoutes.js   → API route definitions
│   ├── 📄 server.js              → App entry point
│   ├── 📄 .env                   → Environment config (gitignored)
│   └── 📄 package.json           → Dependencies & scripts
│
├── 📄 .gitignore
└── 📄 README.md                  → You are here! 📍
```

## Prerequisites

- **Node.js** v18+ ([Download](https://nodejs.org/))
- **MongoDB** 4.x+ (Local or [MongoDB Atlas](https://www.mongodb.com/atlas))

## Installation

### Development Setup

> **Tip:** For a quick start, see the [Quick Start](#quick-start) section above.

**Step 1:** Clone and navigate to the project
```bash
git clone <repository-url>
cd Mini-Message-Board/backend
```

**Step 2:** Install dependencies
```bash
npm install
```

**Step 3:** Configure environment

Create a `.env` file:
```bash
# On Linux/Mac
echo "MONGO_URL=mongodb://localhost:27017/mini-message-board
PORT=8000" > .env

# On Windows PowerShell
Set-Content -Path .env -Value "MONGO_URL=mongodb://localhost:27017/mini-message-board`nPORT=8000"
```

**Step 4:** Start development server
```bash
npm run dev
```

### Production Setup

```bash
# 1. Install dependencies
npm ci --only=production

# 2. Set environment variables (via hosting platform or .env)
export MONGO_URL=your_production_mongodb_uri
export PORT=8000

# 3. Start server
node server.js
```

## API Reference

Base URL: `http://localhost:8000`

### Endpoints Overview

| Method | Endpoint | Description | Status Codes |
|--------|----------|-------------|--------------|
| `GET` | `/` | Health check | `200` |
| `GET` | `/messages` | List all messages | `200`, `500` |
| `GET` | `/messages/:id` | Get message by ID | `200`, `404`, `500` |
| `POST` | `/messages` | Create new message | `201`, `400`, `500` |
| `PUT` | `/messages/:id` | Update message | `200`, `400`, `404`, `500` |
| `DELETE` | `/messages/:id` | Delete message | `200`, `404`, `500` |

### Interactive Examples

#### 1. Health Check
```bash
curl http://localhost:8000/
```
**Response:**
```
Server running 🚀
```

---

#### 2. Create a Message
```bash
curl -X POST http://localhost:8000/messages \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "text": "Hello, World!"}'
```
**Response:** `201 Created`
```json
{
  "id": 1,
  "text": "Hello, World!",
  "_id": "507f1f77bcf86cd799439011",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

---

#### 3. Get All Messages
```bash
curl http://localhost:8000/messages
```
**Response:** `200 OK`
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "id": 1,
    "text": "Hello, World!",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

#### 4. Get Single Message
```bash
curl http://localhost:8000/messages/1
```
**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "id": 1,
  "text": "Hello, World!",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

---

#### 5. Update Message
```bash
curl -X PUT http://localhost:8000/messages/1 \
  -H "Content-Type: application/json" \
  -d '{"text": "Updated message!"}'
```
**Response:** `200 OK`
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "id": 1,
  "text": "Updated message!",
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T11:00:00.000Z"
}
```

---

#### 6. Delete Message
```bash
curl -X DELETE http://localhost:8000/messages/1
```
**Response:** `200 OK`
```json
{
  "message": "Deleted successfully"
}
```

## Data Model

### Message Schema

```javascript
{
  id: Number,      // Required, Unique - User-defined numeric ID
  text: String,    // Required, Unique - Message content
  createdAt: Date, // Auto-generated by Mongoose
  updatedAt: Date  // Auto-generated by Mongoose
}
```

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `id` | `Number` | Required, Unique | User-defined numeric identifier (1, 2, 3...) |
| `text` | `String` | Required, Unique | The actual message content |
| `createdAt` | `Date` | Auto-generated | Timestamp when message was created |
| `updatedAt` | `Date` | Auto-generated | Timestamp when message was last updated |

> **Note:** Both `id` and `text` must be unique. Attempting to create a message with a duplicate `id` or `text` will return a `400 Bad Request` error.

## Configuration

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
# Required
MONGO_URL=mongodb://localhost:27017/mini-message-board

# Optional (defaults to 8000)
PORT=8000
```

### MongoDB Connection Examples

**Local MongoDB:**
```env
MONGO_URL=mongodb://localhost:27017/mini-message-board
```

**MongoDB Atlas (Cloud):**
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/mini-message-board
```

**With Authentication:**
```env
MONGO_URL=mongodb://username:password@localhost:27017/mini-message-board
```

## Error Reference

### HTTP Status Codes

| Code | Meaning | When It Occurs |
|------|---------|----------------|
| `200` | OK | Successful GET, PUT, DELETE operations |
| `201` | Created | Message successfully created |
| `400` | Bad Request | Missing fields, duplicate ID, or invalid input |
| `404` | Not Found | Message with specified ID doesn't exist |
| `500` | Server Error | Database connection or internal server error |

### Error Response Format

```json
{
  "error": "Descriptive error message here"
}
```

### Common Error Messages

| Endpoint | Error | Cause |
|----------|-------|-------|
| `POST /messages` | `"id and text both needed!"` | Missing required fields in request body |
| `POST /messages` | `"ID Already exist!"` | The numeric `id` is already in use |
| `PUT /messages/:id` | `"Text is required"` | Request body missing `text` field |
| `GET/PUT/DELETE /messages/:id` | `"Message not found"` | No message exists with that ID |

## Testing the API

### Using cURL

```bash
# Create a message
curl -X POST http://localhost:8000/messages \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "text": "Test message"}'

# Get all messages
curl http://localhost:8000/messages

# Update a message
curl -X PUT http://localhost:8000/messages/1 \
  -H "Content-Type: application/json" \
  -d '{"text": "Updated test message"}'

# Delete a message
curl -X DELETE http://localhost:8000/messages/1
```

### Using Postman/Insomnia

1. Import the endpoints from the [API Reference](#api-reference) section
2. Set base URL to `http://localhost:8000`
3. For POST/PUT requests, set `Content-Type: application/json` header

## Deployment

### Heroku

```bash
# 1. Create Heroku app
heroku create your-app-name

# 2. Set environment variables
heroku config:set MONGO_URL=your_mongodb_uri

# 3. Deploy
git push heroku main
```

### Railway/Render

1. Connect your GitHub repository
2. Add `MONGO_URL` as an environment variable
3. Deploy automatically on push to main

### Docker (Optional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8000
CMD ["node", "server.js"]
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with auto-reload (development) |
| `npm test` | Run tests (placeholder) |

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| [express](https://expressjs.com/) | `^5.2.1` | Fast, unopinionated web framework |
| [mongoose](https://mongoosejs.com/) | `^9.6.1` | Elegant MongoDB object modeling |
| [dotenv](https://github.com/motdotla/dotenv) | `^17.4.2` | Environment variable management |

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the ISC License. See `LICENSE` for more information.

---

<div align="center">

**[Back to Top](#mini-message-board)**

Made with ❤️ and ☕

</div>
