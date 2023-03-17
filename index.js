const express = require("express");
const app = express();
const cors = require("cors");
const signupRoute = require('./routes/register.route');
// middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", signupRoute);


// public route test
app.get("/", (req, res) => {
  res.send({ message: "Airt Ticket API Side Running" });
});

// not found route
app.get("*", (req, res) => {
  res.send({ message: `This URL: ${req.url} is not found` });
});

module.exports = app;
