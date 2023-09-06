const { StatusCodes } = require("http-status-codes");
const CustomError = require("./CustomError");

class UnauthorizedError extends CustomError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
