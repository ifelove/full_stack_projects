const express = require("express");
const router = express.Router();

const {
  getAlltEmployees,
  getSingleEmployee,
  createEmployee,
  updateSingleEmployee,
  deleteemployee,
} = require("../controller/controller-employee");

router.route("/").get(getAlltEmployees).post(createEmployee);
router
  .route("/:id")
  .get(getSingleEmployee)
  .patch(updateSingleEmployee)
  .delete(deleteemployee);

module.exports = router;
