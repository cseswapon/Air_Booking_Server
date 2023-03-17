const express = require("express");
const { userLogin } = require("../controller/login.controller");
const { userCreate } = require("../controller/Register.controller");
const route = express.Router();

route.route("/singup").post(userCreate);
route.post("/login", userLogin);

module.exports = route;
