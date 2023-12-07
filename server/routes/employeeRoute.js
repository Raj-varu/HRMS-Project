const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();
//employee Data
router.get("/", employeeController.emp_display);
router.post("/create", employeeController.emp_create);
router.put("/update/:id", employeeController.emp_update);
router.delete("/delete/:id", employeeController.emp_delete);
//Award Data
router.get("/", employeeController.award_display);
router.post("/create", employeeController.award_create);
router.put("/update/:id", employeeController.award_update);
router.delete("/delete/:id", employeeController.award_delete);
//Notice Data
router.get("/", employeeController.notice_display);
router.post("/create", employeeController.notice_create);
router.put("/update/:id", employeeController.notice_update);
router.delete("/delete/:id", employeeController.notice_delete);
//TODO import handler routes and controllers

module.exports = router;
