const {
  BadRequestError,
  UnAuthorizedError,
  UnAuthenticatedError,
} = require("../error/IndexError");

const { isTokenValid } = require("../JWT/indexJwt");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new UnAuthenticatedError("invalid credentials");
  }
  try {
    const tokenUser = isTokenValid(token);
    // console.log(tokenUser);
    const { firstname, lastname, role, userId } = tokenUser;
    console.log(tokenUser);
    req.user = { firstname, lastname, role, userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("invalid credentials........");
  }
};

const authourizeUser = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      throw new UnAuthorizedError("You ae not allow to access this route");
    }
    next();
  };
};

module.exports = { authenticateUser, authourizeUser };
