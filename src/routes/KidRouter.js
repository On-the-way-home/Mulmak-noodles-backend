const express = require('express');
const route = express.Router();
const KidController = require('../controllers/KidController');

route.post("/", KidController.createKid);

module.exports = route;