const Employee = require("../models/employeeSchema");
const employeeController = {
  emp_display: async (req, res) => {
    try {
      const employees = await Employee.find(); // Fetch all employees from the database
      res.json(employees); // Send the list of employees as a JSON response
    } catch (error) {
      console.error("Error fetching employees: ", error);
      res.status(500).send("Internal Server Error");
    }
  },
  emp_create: async (req, res) => {
    const {
      name,
      full_name,
      father_name,
      mobile,
      role,
      email,
      gender,
      empno,
      cardno,
      image,
      company,
      department,
      temp_add,
      perma_add,
      city,
      pincode,
      Date,
    } = req.body;
    if (!name) {
      return res.status(406).send({
        message: "Name is Required",
      });
    }
    if (!full_name) {
      return res.status(406).send({
        message: "Full Name is Required",
      });
    }
    if (!father_name) {
      return res.status(406).send({
        message: "Father Name is Required",
      });
    }
    if (!email) {
      return res.status(406).send({
        message: "Email is Required",
      });
    }
    if (!mobile) {
      return res.status(406).send({
        message: "Mobile is Required",
      });
    }
    if (!role) {
      return res.status(406).send({
        message: "Role is Required",
      });
    }
    if (!gender) {
      return res.status(406).send({
        message: "Gender is Required",
      });
    }
    if (!empno) {
      return res.status(406).send({
        message: "Employee Number is Required",
      });
    }
    if (!cardno) {
      return res.status(406).send({
        message: "Card Number is Required",
      });
    }
    if (!image) {
      return res.status(406).send({
        message: "Image is Required",
      });
    }
    if (!company) {
      return res.status(406).send({
        message: "Company is Required",
      });
    }
    if (!department) {
      return res.status(406).send({
        message: "Department is Required",
      });
    }
    if (!temp_add) {
      return res.status(406).send({
        message: "Temporary Address is Required",
      });
    }
    if (!perma_add) {
      return res.status(406).send({
        message: "Permanent Address is Required",
      });
    }
    if (!city) {
      return res.status(406).send({
        message: "City is Required",
      });
    }
    if (!pincode) {
      return res.status(406).send({
        message: "Pincode is Required",
      });
    }
    if (!Date) {
      return res.status(406).send({
        message: "Date is Required",
      });
    }

    //Saving to Database
    try {
      // Create a new Employee instance with the provided data
      const newEmployee = new Employee({
        name,
        full_name,
        father_name,
        mobile,
        role,
        email,
        gender,
        empno,
        cardno,
        image,
        company,
        department,
        temp_add,
        perma_add,
        city,
        pincode,
        Date,
      });

      // Save the new employee to the database
      await newEmployee.save();

      res.status(201).send({
        message: "Employee created successfully",
        employee: newEmployee,
      });
    } catch (error) {
      res.status(500).send({
        message: "Error creating employee",
        error: error.message,
      });
    }
  },
  emp_update: async (req, res) => {
    const { id } = req.params;
    const { field, value } = req.body;
    // console.log("id", id);
    // console.log(req.body);
    // console.log(field);
    // console.log(value);

    if (!field) {
      return res.status(400).json({ message: "Field Not Selected" });
    }
    if (!value) {
      return res.status(400).json({ message: "Value is Defined" });
    }

    try {
      const employee = await Employee.findById(id);
      if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      if (employee[field] === undefined) {
        return res.status(400).json({ message: "Invalid field" });
      }

      employee[field] = value;
      await employee.save();

      return res
        .status(200)
        .json({ message: "Employee updated successfully", employee });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error updating employee", error: error.message });
    }
  },
  emp_delete: async (req, res) => {
    try {
      const { id } = req.params;

      // Find the employee by ID and remove it
      const deletedEmployee = await Employee.findByIdAndDelete(id);

      if (!deletedEmployee) {
        return res.status(404).json({ message: "Employee not found" });
      }

      return res.status(200).json({
        message: "Employee deleted successfully",
        employee: deletedEmployee,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error deleting employee", error: error.message });
    }
  },
  award_display: async (req, res) => {},
  award_create: async (req, res) => {},
  award_update: async (req, res) => {},
  award_delete: async (req, res) => {},
  notice_display: async (req, res) => {},
  notice_create: async (req, res) => {},
  notice_update: async (req, res) => {},
  notice_delete: async (req, res) => {},
};
module.exports = employeeController;
