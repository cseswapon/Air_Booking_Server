const express = require("express");
const { flight, singleFlight } = require("../controller/flight.controller");
const { checkLogin } = require("../middlewares/checkLogion");

const route = express.Router();

route.route("/").get(checkLogin, flight);

route.get("/:id", checkLogin, singleFlight);

module.exports = route;
