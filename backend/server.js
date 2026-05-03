import express from "express";

const app = express();
app.use(express.json());
const port = 8000;
let messages = [
  { id: 1, text: "kohli" },
  { id: 2, text: "Dhoni" },
  { id: 3, text: "Rahul" },
];
app.get("/", (req, res) => {
  res.send("<h1>Server is runnning!</h1>");
});
app.get("/messages", (req, res) => {
  res.send(messages);
});

app.listen(port, () => {
  console.log(`The server is running in the ${port}`);
});
