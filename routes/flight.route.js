const express = require("express");
const { flight } = require("../controller/flight.controller");

const route = express.Router();

route.get("/", flight);

module.exports = route;
