const jwt = require('jsonwebtoken');

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: process.env.NODE_ENV !== 'development',
    domain: 'fi-track-frontend.vercel.app',
    // sameSite: 'strict',
  });
};

module.exports = generateToken;
