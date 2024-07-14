// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const JWT_TOKEN = process.env.JWT_TOKEN;
    const decoded = jwt.verify(token, JWT_TOKEN);
    req.email = decoded.email;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

