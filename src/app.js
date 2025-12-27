// src/app.js
require("dotenv").config();
const express = require("express");
const app = express();

// Database Connection
require("./configs/db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger Docs
const swaggerDocs = require("./configs/swagger");
swaggerDocs(app);

// Routes
const mainRoutes = require("./routes/mainRoutes");
app.use("/api", mainRoutes);

module.exports = app;
