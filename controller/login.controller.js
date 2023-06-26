const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findUser } = require("../services/login.service");

module.exports.userLogin = async (req, res) => {
  try {
    // console.log(req.body.email);
    const { email, password } = req.body;
    const user = await findUser(email);
    if (user) {
      const isValidPass = await bcrypt.compare(password, user.password);
      if (isValidPass) {
        const token = jwt.sign(
          {
            userId: user._id,
            username: email,
          },
          process.env.JWT_SECRET,
          { expiresIn: "12h" }
        );
        res.status(200).json({
          access_token: token,
          data: {
            email: user.email,
            companyName: user.companyName,
            personalName: user.personalName,
            country: user.country,
            division: user.division,
            district: user.district,
            contactNumber: user.contactNumber,
            status: user.status,
            role: user.role,
            image: user.image || null
          },
          message: "Login Successfully",
        });
      } else {
        res.status(401).json({
          error: "Authentication failed",
        });
      }
    } else {
      res.status(401).json({
        error: "Authentication failed",
      });
    }
  } catch (err) {
    res
      .status(540)
      .send({ message: "something went wrong", error: err.message });
  }
};
