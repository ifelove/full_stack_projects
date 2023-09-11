const { UnAuthorizedError } = require("../error/IndexError");
const UnauthorizedError = require("../error/UnAuthorizedError");
const checkpermision = (requestUser, resourceUserId) => {
  if (requestUser.role === "admin") {
    return;
  }
  if (requestUser.userId === resourceUserId.toString()) {
    return;
  }

  throw new UnauthorizedError("You are not allow to access this route");
};

module.exports = checkpermision;
