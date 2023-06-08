const Flight = require("../modules/Flight.module");

module.exports.findFlight = async () => {
  // return await Flight.find().select("-name -_id");
  return await Flight.find();
};


module.exports.singleFlight = async (id) => {
  return await Flight.findOne({ _id: id });
}