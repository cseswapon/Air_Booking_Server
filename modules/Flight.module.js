const mongoose = require("mongoose");

const schema = mongoose.Schema({
  flag: String,
  name: String,
  price: Number,
  flightType: String,
  start: String,
  end: String,
  type: String,
  flightStop: Number,
});

const Flight = mongoose.model("Flight", schema);

module.exports = Flight;
