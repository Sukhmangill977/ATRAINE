// server/routes/users.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken'); // Adjust the path if necessary
const User = require('../models/User'); // Adjust the path if necessary

router.get('/profile', verifyToken, async (req, res) => {
  try {
    const email = req.email
    console.log(email)
    const user = await User.findOne({email : email})
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
