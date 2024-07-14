// routes/auth.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

router.post(
  "/signup",

  async (req, res) => {
    const validateUser = await User.findOne({ email: req.body.email });
    if (validateUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email id already exist" });
    }

    try {
      const myPlaintextPassword = req.body.password;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(myPlaintextPassword, salt);
      const { email, name, bio, age, address, phone, gender } = req.body;

      try {
        const user = new User({
          name,
          email,
          password: hash,
          bio,
          age,
          address,
          phone,
          gender
        }); await user.save();
      } catch (error) {
        console.error("Error creating document:", error);
      }

      // Instead of returning just progressVlue, return the entire userDetail object

      return res
        .status(200)
        .json({ success: true, message: "successfully signup" });
    } catch (error) {
      res.status(400).json({ success: false, message: error.keyValue });
    }
  },
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const JWT_TOKEN = process.env.JWT_TOKEN;
  if (!user) {
    return res.status(400).json({ success: false, message: "User Not found" });
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (passwordCompare) {
    const data = {
      email: user.email,
    };

    const authToken = jwt.sign(data, JWT_TOKEN);
    return res.status(200).json({ success: true, authtoken: authToken });
  }

  return res.status(400).json({
    success: false,
    message: "Please try to login with the correct credentials",
  });
});

module.exports = router;
