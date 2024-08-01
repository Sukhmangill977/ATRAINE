// server/middleware/verifyToken.js
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });

  }


  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN); // Replace 'yourSecretKey' with your actual secret key
    console.log(decoded)
    req.email = decoded.email;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = verifyToken;
