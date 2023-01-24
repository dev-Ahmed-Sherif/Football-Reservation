const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    paymentMethode: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    reservation: { type: Array },
    role: {
      type: String,
      default: "client",
    },
    dateRegister: {
      type: String,
    },
  },
  {
    versionKey: false,
    strict: false,
  }
);
user = mongoose.model("User", userSchema);
module.exports = user;
