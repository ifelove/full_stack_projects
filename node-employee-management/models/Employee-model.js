const mongoose = require("mongoose");

const EmployyeeSchma = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Must provide firstname"],
    trim: true,
    maxlength: [20, "Firstname can not be more than 20 letters"],
  },
  lastname: {
    type: String,
    required: [true, "Lastname must be provided"],
    trim: true,
    maxlength: [20, "Lastname can not be more than 20 letters"],
  },
  email: String,
}); //mongoose.schema is a class,so we create new instance of it

module.exports = mongoose.model("Employee", EmployyeeSchma);
