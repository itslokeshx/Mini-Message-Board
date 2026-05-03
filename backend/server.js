import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
