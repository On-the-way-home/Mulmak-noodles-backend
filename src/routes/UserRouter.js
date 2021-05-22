const express = require('express');
const route = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { User } = require('../domain/user');
const UserController = require('../controllers/UserController');

route.post("/", UserController.signIn);
route.get("/list", UserController.showChildrenList);
route.post("/driver", UserController.evaluateDriver);

module.exports = route;