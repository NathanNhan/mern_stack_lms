const express = require('express');
const router = express.Router();

const coursesController = require('../controllers/CoursesController');
const verify = require ("../utils/verifyToken.js");

//CREATE
router.post("/", verify.verifyUser, coursesController.createCourse);
//UPDATE
router.put("/:id", verify.verifyUser, coursesController.updateCourse);
//DELETE
router.delete("/:id", verify.verifyUser, coursesController.deleteCourse);
//GET
router.get("/find/:id", coursesController.getCourse);
//GET ALL
router.get("/", coursesController.getCourses);

module.exports = router;