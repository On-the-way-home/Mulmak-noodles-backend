const express = require('express');
const route = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const userService = require('../service/userService');

const signIn = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }

    try {
      const UserId = await userService.checkUser(id);
      return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, UserId));
    } catch {
      const UserId = await userService.createUser(id);
      return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, UserId));
    }

  } catch (error) {
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.SIGN_UP_FAIL));
  }
}

const showUserInfo = async (req, res) => {
  try {
    const { id } = req.body;

    //금액 다 더하고
    const cost = await userService.checkAllCost(id);

    //횟수 세고
    const count = await userService.checkAllCount(id);

    return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS, UserId));

  } catch {
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.READ_USER_ALL_FAIL));
  }
}

module.exports = {
  signIn,
  showUserInfo
}