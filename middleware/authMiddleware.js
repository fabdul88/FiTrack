const jwt = require('jsonwebtoken');
const AuthModel = require('../models/auth.model');

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await AuthModel.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'not authorized, invalid token' });
    }
  } else {
    res.status(401).json({ message: 'not authorized, no token' });
  }
};

module.exports = protect;
