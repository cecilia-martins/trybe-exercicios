const jwt = require('jsonwebtoken');

require('dotenv').config();

// preciso das options e do segredo
const SECRET = process.env.JWT_SECRET;
const CONFIG = { algorithm: 'HS256', expiresIn: '1d' };

const createToken = (payload) => {
  const token = jwt.sign(payload, SECRET, CONFIG);

  return token;
};

const verifyToken = (token) => {
  const payload = jwt.verify(token, SECRET);

  return payload;
};

module.exports = {
  createToken,
  verifyToken,
};
