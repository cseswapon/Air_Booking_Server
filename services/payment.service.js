const Payment = require("../modules/Payment.module");

module.exports.getServicePayment = () => {
    return Payment.find({}).populate("user");
}

module.exports.postServicePayment = (body) => {
    return Payment.create(body)
}