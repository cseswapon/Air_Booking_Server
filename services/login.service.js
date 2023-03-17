const Register = require("../modules/register.module");

module.exports.findUser = (email) => {
  return Register.findOne({ email });
};
