const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class UnAuthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnAuthenticatedError;
