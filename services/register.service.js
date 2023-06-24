const Register = require("../modules/register.module");

const registerService = (newBody) => {
  return Register.create(newBody);
};

const updateUserService = (userEmail, updatedData, res) => {
  return Register.findOneAndUpdate({ email: userEmail }, updatedData, {
    new: true,
  })
    .then((updatedUser) => {
      res.json({ message: "User Update Successful", data: updatedUser });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
  registerService,
  updateUserService,
};
