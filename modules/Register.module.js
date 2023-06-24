const validator = require("validator");
const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    companyName: {
      type: String,
      trim: true,
      require: [true, "Please Provide a Company Name"],
      minLength: [3, "Min Length is 3, got {VALUE}"],
      maxLength: 100,
    },
    personalName: {
      type: String,
      trim: true,
      require: [true, "Please Provide a Personal Name"],
      minLength: [3, "Min Length is 3, got {VALUE}"],
      maxLength: 100,
    },
    country: {
      type: String,
      enum: {
        values: ["bangladesh", "malaysia"],
        message: "Country can't {VALUES}, must be bd/my",
      },
      require: [true, "Please Select Your Country Name"],
      default: "bangladesh",
    },
    division: {
      type: String,
      require: true,
    },
    district: {
      type: String,
      require: true,
    },
    contactNumber: {
      type: String,
      require: true,
      maxLength: 11,
    },
    email: {
      type: String,
      unique: [true, "Please Provide Unique Email"],
      require: true,
      validate: [validator.isEmail, "Please Provide Your Valid Email"],
      lowercase: true,
      message: "Email {VALUES}",
    },
    password: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    role: {
      type: String,
      enum: {
        values: ["admin", "user"],
        message: "user can't be {VALUES}, must be admin/user",
      },
      default: "user",
    },
  },
  { timestamps: true }
);

const Register = mongoose.model("Register", schema);

module.exports = Register;
