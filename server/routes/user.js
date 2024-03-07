const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router
    .route("/user")
    .get(userController.getAllUsers, userController.getOneUser)

router.route("/user/:email/:senha")
    .get(userController.getOneUser);

module.exports = router;