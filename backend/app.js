const express = require("express");
const mongoose = require("mongoose");

const app = express();

// 🔥 connect to MongoDB
mongoose
  .connect("mongodb://db:27017/mydb")
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch((err) => console.log(err));

// test route
app.get("/api", (req, res) => {
  res.json({ message: "Hello with DB 🚀" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
