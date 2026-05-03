import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>Server is runnning!</h1>");
});

app.listen(port, () => {
  console.log(`The server is running in the ${port}`);
});
