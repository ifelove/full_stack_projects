const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getSingleUser,
  updateUser,
  showCurrentUser,
  deleteUser,
  updateUserPasword,
} = require("../controller/userController");
const {
  authenticateUser,
  authourizeUser,
} = require("../middleware/authentication");

router.route("/").get(authenticateUser, authourizeUser("admin"), getAllUsers);
router.route("/updateuser").patch(authenticateUser, updateUser);
router.route("/showme").get(authenticateUser, showCurrentUser);
router.route("/updatepassword").patch(authenticateUser, updateUserPasword);

router
  .route("/:id")
  .get(authenticateUser, getSingleUser)

  router.route("/delete").delete(authenticateUser, authourizeUser("user","admin"), deleteUser);

module.exports = router;
