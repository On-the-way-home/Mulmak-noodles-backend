const express = require('express');
const route = express.Router();
const KidController = require('../controllers/KidController');

route.post("/", KidController.createKid);
route.get("/:UserId", KidController.showKid);

module.exports = route;