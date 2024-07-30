const jwt = require('jsonwebtoken');
const JWT_TOKEN = process.env.JWT_TOKEN;

module.exports = (req, res, next) => {
  const token = req.header('token');
  if (!token) return res.status(401).json({ success: false, message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, JWT_TOKEN);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ success: false, message: 'Invalid Token' });
  }
};
