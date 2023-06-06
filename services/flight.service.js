const Flight = require("../modules/Flight.module");

module.exports.findFlight = async () => {
  return await Flight.find();
};
