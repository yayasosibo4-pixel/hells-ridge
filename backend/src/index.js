import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.json({ message: "Hell's Ridge backend is running." });
});

// Example auth route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  res.json({ user: { email }, token: "fake-jwt-token" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
