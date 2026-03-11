// Our Main App

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const connectToDB = require("./db/db");

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.route");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/user", userRoutes);

// Captain Routes
app.use("/captain", captainRoutes);

module.exports = app;
