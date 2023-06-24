const bcrypt = require("bcrypt");
const { findUser } = require("../services/login.service");
const {
  registerService,
  updateUserService,
} = require("../services/register.service");

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
      res.status(406).send({
        message: `${email} is duplicated please try another unique email`,
      });
    }
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports.userUpdate = async (req, res) => {
  try {
    // return res.send({message:'hello'})
    // console.log(req.body)
    const userEmail = req.params.email;
    const { companyName, contactNumber } = req.body;
    // console.log(userEmail,company,contactNumber, req.file)
    const image = req.file;

    const updatedData = {
      companyName,
      contactNumber,
      // You can store the file path or other relevant data in the database
      image: image ? image.filename : null,
    };

    await updateUserService(userEmail, updatedData, res);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
  
};
