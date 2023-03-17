const bcrypt = require("bcrypt");
const { registerService } = require("../services/register.service");

module.exports.userCreate = async (req, res) => {
  try {
    const { password } = req.body;
    const newBody = {
      ...req.body,
      password: await bcrypt.hash(password, 10),
    };
    const data = await registerService(newBody);
    res.status(200).send({
      status: "Success",
      message: "Successfully created the brand",
      data,
    });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
