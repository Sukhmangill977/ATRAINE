// Assuming this is in your auth middleware or the relevant route file
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Middleware to authenticate token and attach user to request
const authenticateToken = (req, res, next) => {
  const token = req.headers['token'];
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    if (!user) return res.status(404).json({ success: false, message: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
