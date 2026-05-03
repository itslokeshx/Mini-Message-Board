import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
let messages = [
  { id: 18, text: "Virat Kohli" },
  { id: 1, text: "KL Rahul" },
  { id: 7, text: "MS Dhoni" },
  { id: 17, text: "AB de Villiers" },
  { id: 45, text: "Rohit Sharma" },
];

app.get("/", (req, res) => {
  res.send("<h1>Server is runnning!</h1>");
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

app.get("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const message = messages.find((m) => m.id === id);
  if (!message) {
    return res.status(404).json({ error: "Message not found :<" });
  }
  res.json(message);
});

app.post("/messages", (req, res) => {
  const { id, text } = req.body;

  const exist = messages.find((m) => m.id === id);
  if (exist) {
    return res.json({ error: " message already exsit" });
  }
  const newMessage = { id, text };
  messages.push(newMessage);
  res.status(201).json(messages);
});

app.put("/messages/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  const message = messages.find((m) => m.id === id);
  if (!message) {
    return res.status(404).json({ error: "Message not found :<" });
  }
  if (!text) {
    return res.json("Enter the text!");
  }
  message.text = text;
  res.json(message);
});

app.delete("/messages/:id", (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id);
  const index = messages.findIndex((m) => m.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Message not found :<" });
  }
  messages.splice(index, 1);
  res.json(messages);
});
app.listen(PORT, () => {
  console.log(`The server is running in the ${PORT}`);
});
