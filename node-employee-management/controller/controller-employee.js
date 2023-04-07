const { findOne } = require("../models/Employee-model");
const Employee = require("../models/Employee-model");

const getAlltEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).send({ employees });
  } catch (error) {
    console.log({ msg: error });
  }
};

const createEmployee = async (req, res) => {
  try {
    console.log("creating employee");
    // res.send("creating employee");
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    //const employeeID = req.req.params.id;
    const { id: employeeID } = req.params;
    const employee = await Employee.findOne({ _id: employeeID });

    if (!employee) {
      return res.status(404).json({msg:`No employee with id: ${employeeID}`});
    }

    res.status(200).json({ employee });
  } catch (error) {
    console.log(error);
  }
};

const updateSingleEmployee = (req, res) => {
  console.log("updating a particular employee");
  res.json("updating a particular employee");
};

const deleteemployee = (req, res) => {
  console.log("deleting a particular employee");
  res.send("deleting a particular employee");
};

module.exports = {
  getAlltEmployees,
  getSingleEmployee,
  createEmployee,
  updateSingleEmployee,
  deleteemployee,
};
