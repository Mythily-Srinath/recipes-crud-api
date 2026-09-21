const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Recipes API is running"
  });
});

// Recipe routes
app.use("/api/recipes", recipeRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});