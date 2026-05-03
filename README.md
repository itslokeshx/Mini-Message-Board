# Mini Message Board

A simple REST API for a message board application built with Node.js, Express.js, and MongoDB.

## Features

- Create, read, update, and delete messages
- MongoDB database integration with Mongoose ODM
- RESTful API design
- Input validation and error handling
- Unique ID-based message identification

## Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB with Mongoose v9.6.1
- **Environment**: dotenv for configuration

## Project Structure

```
Mini-Message-Board/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection configuration
│   ├── controllers/
│   │   └── messageController.js  # CRUD operation handlers
│   ├── models/
│   │   └── Messages.js        # Mongoose schema definition
│   ├── routes/
│   │   └── messageRoutes.js   # API route definitions
│   ├── server.js              # Application entry point
│   ├── .env                   # Environment variables (not in git)
│   └── package.json           # Dependencies and scripts
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js (v18 or higher recommended)
- MongoDB instance (local or cloud-based like MongoDB Atlas)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Mini-Message-Board/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the `backend` directory with the following variables:
```env
MONGO_URL=mongodb://localhost:27017/mini-message-board
PORT=8000
```

For MongoDB Atlas, use:
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/mini-message-board
PORT=8000
```

## Usage

### Development Mode

Run the server with auto-reload on file changes:
```bash
npm run dev
```

The server will start on `http://localhost:8000` (or the port specified in `.env`).

## API Endpoints

Base URL: `http://localhost:8000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check - returns server status |
| GET | `/messages` | Get all messages |
| GET | `/messages/:id` | Get a specific message by numeric ID |
| POST | `/messages` | Create a new message |
| PUT | `/messages/:id` | Update a message by numeric ID |
| DELETE | `/messages/:id` | Delete a message by numeric ID |

### Request/Response Examples

#### Get All Messages
```bash
GET /messages
```
Response:
```json
[
  {
    "_id": "...",
    "id": 1,
    "text": "Hello World",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Get Message by ID
```bash
GET /messages/1
```

#### Create Message
```bash
POST /messages
Content-Type: application/json

{
  "id": 1,
  "text": "Hello World"
}
```

#### Update Message
```bash
PUT /messages/1
Content-Type: application/json

{
  "text": "Updated message"
}
```

#### Delete Message
```bash
DELETE /messages/1
```

## Data Model

### Message Schema

| Field | Type | Required | Unique | Description |
|-------|------|----------|--------|-------------|
| id | Number | Yes | Yes | Numeric identifier for the message |
| text | String | Yes | Yes | Message content |
| createdAt | Date | Auto | - | Timestamp when created |
| updatedAt | Date | Auto | - | Timestamp when last updated |

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK` - Successful GET, PUT, DELETE
- `201 Created` - Successful POST
- `400 Bad Request` - Missing required fields or duplicate ID
- `404 Not Found` - Message with specified ID not found
- `500 Internal Server Error` - Server/database error

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URL` | MongoDB connection string | Required |
| `PORT` | Server port number | 8000 |

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.6.1 | MongoDB ODM |
| dotenv | ^17.4.2 | Environment configuration |

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests.
