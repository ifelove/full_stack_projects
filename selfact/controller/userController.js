const { StatusCodes } = require("http-status-codes");
const User = require("../model/User");
const {
  NotFoundError,
  BadRequestError,
  UnAuthenticatedError,
} = require("../error/IndexError");
const checkpermision = require("../JWT/checkpermision");

const getAllUsers = async (req, res) => {
  //console.log(req.user)
  const users = await User.find({ role: "user" }).select([
    "-password",
    "-passwordConfirm",
  ]);
  res.status(StatusCodes.OK).json({ users });
};
const getSingleUser = async (req, res) => {
  const userId = req.params.id;

  const user = await User.findOne({ _id: userId }).select([
    "-password",
    "-passwordConfirm",
  ]);
  if (!user) {
    throw new NotFoundError(`user not found with ${userId}`);
  }

  // checkpermission
  checkpermision(req.user, user._id);
  res.status(StatusCodes.OK).json({ user });
};
const showCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId }).select([
    "-password",
    "-passwordConfirm",
  ]);
  res.status(StatusCodes.OK).json({ user });
  //res.status(StatusCodes.OK).json({ user:req.user });
};
const updateUser = async (req, res) => {
  const {firstname, othername, lastname, phone } = req.body;
  if (!firstname || !othername || !lastname) {
    throw new BadRequestError("all the field must be provided");
  }

  const user = await User.findOne({ _id: req.user.userId }).select([
    "-password",
    "-passwordConfirm",
  ]);
  user.firstname = firstname;
  user.lastname = lastname;
  user.othername = othername;

  await user.save();
  res.status(StatusCodes.OK).json({ user });
};
const deleteUser = async (req, res) => {
 await User.findOneAndDelete({ _id: req.user.userId });
  res.json("user  Account successfully deleted");
};
const updateUserPasword = async (req, res) => {
  const { newPassword, oldPassword } = req.body;
  if (!newPassword || !oldPassword) {
    throw new BadRequestError("All field must be provided");
  }
  if (newPassword === oldPassword) {
    throw new BadRequestError(
      "the new passwod must be different from the old password"
    );
  }
  const user = await User.findOne({ _id: req.user.userId });
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const isPasswordCorrect = await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("incorrect Password");
  }

  user.password = newPassword;
  await user.save();
  res.status(StatusCodes.OK).json("Password has been updated");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
  deleteUser,
  updateUserPasword,
};
