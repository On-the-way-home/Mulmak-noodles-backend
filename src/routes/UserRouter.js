const express = require('express');
const route = express.Router();
const UserController = require('../controllers/UserController');

route.post("/", UserController.signIn);

module.exports = route;
