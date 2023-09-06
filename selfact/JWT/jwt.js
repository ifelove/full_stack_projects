const JWT = require("jsonwebtoken");

const createJWTToken = ({ payload }) => {
  const token = JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token
};

const isTokenValid = () => {};
const attachedCokiesToRespond = () => {};

module.exports = { createJWTToken, isTokenValid, attachedCokiesToRespond };
