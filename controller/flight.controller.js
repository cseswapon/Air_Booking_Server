const { findFlight } = require("../services/flight.service");

module.exports.flight = async (req, res) => {
  const data = await findFlight();
  res.send({ status: "OK", data: data });
};
