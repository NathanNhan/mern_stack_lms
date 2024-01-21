const express = require('express');
const router = express.Router();

const userController = require ("../controllers/UsersController.js");
const verify = require ("../utils/verifyToken.js");

//UPDATE
router.put("/:id", verify.verifyUser, userController.updateUser);

//DELETE
router.delete("/:id", verify.verifyUser, userController.deleteUser);

//GET
router.get("/:id", verify.verifyUser, userController.getUser);

//GET ALL
router.get("/", verify.verifyUser, userController.getUsers);

module.exports = router;

