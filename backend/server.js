import express from "express";

const app = express();
app.use(express.json());
const port = 8000;
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
  console.log(req.params.id);
  const id = parseInt(req.params.id);
  const message = messages.find((m) => m.id === id);
  if (!message) {
    return res.status(404).json({ error: "Message not found :<" });
  }
  res.json(message);
});

app.listen(port, () => {
  console.log(`The server is running in the ${port}`);
});
