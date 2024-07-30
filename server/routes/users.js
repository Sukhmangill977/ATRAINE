const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const email = req.email
    const user = await User.findOne({ email }).select('-password');
    console.log(user)

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Send user profile data
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;