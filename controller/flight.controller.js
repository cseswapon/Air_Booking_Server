const { findFlight, singleFlight } = require("../services/flight.service");

module.exports.flight = async (req, res) => {
  try {
    const data = await findFlight();
    res.send({ status: "OK", data: data });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: " Something want wrong ",
      error: error.message,
    });
  }
};

module.exports.singleFlight = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await singleFlight(id);
    res.send({ allFlight: result });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not found",
      error: error.message,
    });
  }
};
