const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError } = require("../error/IndexError");

const registerUser = async (req, res) => {
  const { firstname, lastname, othername, email, password, passwordConfirm } =
    req.body;

  const isEmailAlreadyExist = await User.findOne({ email: email });
  console.log(isEmailAlreadyExist);
  if (
    !firstname ||
    !othername ||
    !lastname ||
    !email ||
    !password ||
    !passwordConfirm
  ) {
    throw new BadRequestError("All the required field must be provided");
  }

  if (isEmailAlreadyExist) {
    throw new BadRequestError(
      "Email already exist,please provide another email adress"
    );
  }
  if (password !== passwordConfirm) {
    throw new BadRequestError("Password not match");
  }
  const user = await User.create(req.body);
  res.status(StatusCodes.OK).json({ user });
};

const loginUser = (req, res) => {
  res.send("login user");
};

const logoutUser = (req, res) => {
  res.send("logout user");
};

module.exports = { registerUser, loginUser, logoutUser };
