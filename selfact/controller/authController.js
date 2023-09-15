const User = require("../model/User");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnAuthenticatedError,
} = require("../error/IndexError");

const { createTokenUser, attachedCokiesToRespond } = require("../JWT/indexJwt");
const UnauthorizedError = require("../error/UnAuthorizedError");

const registerUser = async (req, res) => {
  const { firstname, lastname, email, password, passwordConfirm } =
    req.body;

  const isEmailAlreadyExist = await User.findOne({ email: email });
  console.log(isEmailAlreadyExist);
  if (
    !firstname ||
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
  const tokenUser = createTokenUser(user);
  attachedCokiesToRespond({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ tokenUser });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Provide email or Password to Login");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new UnAuthenticatedError(
      `there is no email with ${email},login in with a registered email address`
    );
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnauthorizedError("Invalid Password");
  }
  const tokenUser = await createTokenUser(user);
  attachedCokiesToRespond({ res, user: tokenUser });
  res.status(StatusCodes.OK).json({ user: tokenUser });
};

const logoutUser = (req, res) => {
  res.cookie("token", "logout", { httpOnly: true });
  res.status(StatusCodes.OK).json("logout successfully");
};

module.exports = { registerUser, loginUser, logoutUser };
