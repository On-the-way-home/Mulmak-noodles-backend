const express = require("express");
const route = express.Router();


route.use("/user", require("./UserRouter"));
route.use("/auth", require("./auth"));