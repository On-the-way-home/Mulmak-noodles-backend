var express = require('express');
const route = express.Router();

route.use("/user", require("./UserRouter"));
route.use("/kid", require("./KidRouter"));

module.exports = route;