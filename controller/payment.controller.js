const {
  getServicePayment,
  postServicePayment,
} = require("../services/payment.service");

module.exports.getPayment = async (req, res) => {
    try {
      const result = await getServicePayment();
      res.status(200).send({ data: result });
    } catch (err) {
    res.status(403).send({ message: err.message });
  }
};

module.exports.createPayment = async (req, res) => {
  try {
    const body = req.body;
    const newBody = {
      ...body,
      user : req.userId
    }
    const result = await postServicePayment(newBody);
    res.status(200).send({ data: result });
  } catch (err) {
    res.status(403).send({ message: err.message });
  }
};
