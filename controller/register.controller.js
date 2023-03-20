const bcrypt = require("bcrypt");
const { findUser } = require("../services/login.service");
const { registerService } = require("../services/register.service");

module.exports.userCreate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await findUser(email);
    if (!user) {
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
    } else {
      res
        .status(406)
        .send({
          message: `${email} is duplicated please try another unique email`,
        });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};
