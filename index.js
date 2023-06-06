const express = require("express");
const app = express();
const cors = require("cors");
const signupRoute = require("./routes/register.route");
const flight = require("./routes/flight.route");
const { checkLogin } = require("./middlewares/checkLogion");
// middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", signupRoute);
app.use("/api/v1/flight", flight);

// public route test
app.get("/", (req, res) => {
  res.send({ message: "Airt Ticket API Side Running" });
});

// this route is ver secure 
app.get("/newService", checkLogin, async (req, res) => {
  res.send({ message: "OK" });
});

// not found route
app.get("*", (req, res) => {
  res.send({ message: `This URL: ${req.url} is not found` });
});

module.exports = app;
