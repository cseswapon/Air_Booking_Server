const Register = require("../modules/register.module");

const registerService = (newBody) => {
  return Register.create(newBody);
};



module.exports = {
  registerService,
};
