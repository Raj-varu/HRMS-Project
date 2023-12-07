const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  full_name: {
    type: String,
    required: true,
  },
  father_name: {
    type: String,
  },
  mobile: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  empno: {
    type: String,
  },
  cardno: {
    type: String,
  },
  image: {
    type: String,
  },
  company: {
    type: String,
  },
  department: {
    type: String,
  },

  temp_add: {
    type: String,
  },
  perma_add: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: String,
  },
  Date: {
    type: String,
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
