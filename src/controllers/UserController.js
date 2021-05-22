const User = require("../domain/User");

const signIn = async (req, res) => {
  res.status(200).send("1");
}

const showChildrenList = async (req, res) => {
  res.status(200).send("2");
}

const evaluateDriver = async (req, res) => {
  console.log("얍");
}

module.exports = {
  signIn,
  showChildrenList,
  evaluateDriver
}