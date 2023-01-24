const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const passport = require("passport");
// const flash =

const initializePassport = require("../passport-config");
initializePassport(passport, async (emailUser) => {
  const user = await User.findOne({ email: emailUser });
  return user;
});

// Getting All Users

router.get("/", (req, res) => {});

// Register User

router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.findOne({ email: req.body.email });
    if (user == null) {
      User.create(
        {
          ...body,
          password: hashedPassword,
          dateRegister: new Date().toISOString(),
        },
        function (err, data) {
          if (err) {
            console.log(err);
            res.status(404).send("Not Valid");
          } else {
            console.log(data);
            res.status(200).send("User Registered Successfully");
          }
        }
      );
    } else {
      res.send({ message: "User is already registered, Please login" });
    }
  } catch (e) {
    console.log(e);
  }
});

// Update User

// Delete User

module.exports = router;
