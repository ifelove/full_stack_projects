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
    console.log(req.body)
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    //const employeeID = req.params.id;
    const { id: employeeID } = req.params;
    const employee = await Employee.findOne({ _id: employeeID });

    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id: ${employeeID}` });
    }

    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateSingleEmployee = async (req, res) => {
  try {
    const { id: employeeID } = req.params;
    const employee = await Employee.findOneAndUpdate(
      { _id: employeeID },
      req.body,
      { new: true, runValidators: true } //to return new update and to apply the validator
    );
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id: ${employeeID}` });
    }
    res.status(200).json({ employee });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteemployee = async (req, res) => {
  try {
    const employeeID = req.params.id;
    /**const { id: employeeID } = req.params;*/
    const employee = await Employee.findOneAndDelete({ _id: employeeID });

    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id: ${employeeID}` });
    }

    res.status(200).json("Employee deleted successfully");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAlltEmployees,
  getSingleEmployee,
  createEmployee,
  updateSingleEmployee,
  deleteemployee,
};
