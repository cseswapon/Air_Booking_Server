const mongoose = require("mongoose");
const validator = require("validator");
const schema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      validator: [validator.isEmail, "Please Provide Your Valid Email"],
      lowercase: true,
      message: "Email {VALUES}",
    },
    amount: String,
    from: {
      type: String,
      maxLength: 3,
      require: true,
    },
    to: {
      type: String,
      maxLength: 3,
      require: true,
    },
    airlinesName: {
      type: String,
      require: true,
    },
    adult: Number,
    children: Number,
    infant: Number,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Register",
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model("Payment", schema);

module.exports = Payment;
