const express = require("express");
const { checkLogin } = require("../middlewares/checkLogion");

const { getPayment, createPayment } = require("../controller/payment.controller");
const router = express.Router();

router
  .route("/")
  .get(checkLogin, getPayment)
  .post(checkLogin, createPayment);


module.exports = router