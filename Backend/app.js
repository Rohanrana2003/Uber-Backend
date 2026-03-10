// Our Main App

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

const connectToDB = require("./db/db");

const userRoutes = require("./routes/user.routes");

connectToDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// app.use("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/user", userRoutes);

module.exports = app;
