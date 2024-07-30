const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/User");

// Set up multer for file uploads with memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Signup route
router.post(
  "/signup",
  upload.single('profilePhoto'),
  async (req, res) => {
    // Check if the user already exists
    const validateUser = await User.findOne({ email: req.body.email });
    if (validateUser) {
      return res.status(400).json({ success: false, message: "Email id already exists" });
    }

    try {
      // Hash the password
      const myPlaintextPassword = req.body.password;
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(myPlaintextPassword, salt);
      const { email, name, phone, gender, FieldofInterest } = req.body;

      // Convert the uploaded file to Base64 string
      let profilePhoto = null;
      if (req.file) {
        profilePhoto = req.file.buffer.toString('base64'); // Convert buffer to Base64
      }

      // Create a new user object
      const user = new User({
        name,
        email,
        password: hash,
        phone,
        gender,
        FieldofInterest,
        profilePhoto // Store Base64 string
      });

      // Save the user to the database
      await user.save();

      // Send success response
      return res.status(200).json({ success: true, message: "Successfully signed up" });
    } catch (error) {
      console.error("Error creating document:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  }
);

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const JWT_TOKEN = process.env.JWT_TOKEN;

  // Check if user exists
  if (!user) {
    return res.status(400).json({ success: false, message: "User Not found" });
  }

  // Compare password
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (passwordCompare) {
    const data = { email: user.email };
    const authToken = jwt.sign(data, JWT_TOKEN);
    return res.status(200).json({ success: true, authtoken: authToken });
  }

  // Invalid credentials
  return res.status(400).json({
    success: false,
    message: "Please try to login with the correct credentials",
  });
});

module.exports = router;
