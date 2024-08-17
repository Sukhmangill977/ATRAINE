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
router.post("/signup", upload.single('profilePhoto'), async (req, res) => {
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "Email id already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Convert the uploaded file to a Base64 string if it exists
    let profilePhoto = null;
    if (req.file) {
      profilePhoto = req.file.buffer.toString('base64'); // Convert buffer to Base64
    }

    // Create a new user object
    const { email, name, phone, gender, FieldofInterest } = req.body;
    const user = new User({
      name,
      email,
      password: hashedPassword,
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
    console.error("Error during signup:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const JWT_TOKEN = process.env.JWT_TOKEN;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User Not found" });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Create JWT payload
    const payload = { email: user.email };

    // Sign token
    const authToken = jwt.sign(payload, JWT_TOKEN, { expiresIn: '1h' });

    // Send success response with token
    return res.status(200).json({ success: true, authtoken: authToken });
  } catch (error) {
    console.error("Error during login:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
