const JWT = require("jsonwebtoken");

const createJWTToken = ({ payload }) => {
  const token = JWT.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const isTokenValid = (token) => {
  return JWT.verify(token, process.env.JWT_SECRET);
};
const attachedCokiesToRespond = ({ res, user }) => {
  const token = createJWTToken({ payload: user });
  const oneDay = 1 * 24 * 3600 * 1000;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};

module.exports = { createJWTToken, isTokenValid, attachedCokiesToRespond };
