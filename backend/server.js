import express from "express";
import dotenv from "dotenv";
import cron from "node-cron";
import connectDB from "./config/db.js";
import messageRoutes from "./routes/messageRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://mini-message-board-seven.vercel.app",
    ],
  }),
);
connectDB();

app.use("/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

const PORT = process.env.PORT || 8000;

const startKeepAlive = () => {
  const BACKEND_URL = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

  cron.schedule("*/14 * * * *", async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/health`);
      console.log(`Keep-alive ping: ${res.status} at ${new Date().toISOString()}`);
    } catch (error) {
      console.error("Keep-alive ping failed:", error.message);
    }
  });

  console.log("Keep-alive cron started (pings every 14 minutes)");
};

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
  startKeepAlive();
});
