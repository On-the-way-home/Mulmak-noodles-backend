const express = require('express');
const route = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { Kid } = require("../domain");
const { Card } = require("../domain");

const createKid = async (req, res) => {
    try {
        const { centerName, kidName, kidGender, kidAge, cardNum, cardDate, cardPassword, birthDate, userIdx } = req.body;

        if (!centerName || !kidName || !kidGender || !kidAge || !cardNum || !cardDate || !cardPassword || !birthDate || !userIdx) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }

        const kid = await Kid.create({
            centerName: centerName,
            kidName: kidName,
            kidGender: kidGender,
            kidAge: kidAge,
        });

        const card = await Card.create({
            cardNum: cardNum,
            cardDate: cardDate,
            cardPassword: cardPassword,
            birthDate: birthDate,
            userIdx: userIdx,
        });

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATE_KID_INFO_SUCCESS, {
            centerName: kid.centerName,
            kidName: kid.kidName,
            kidGender: kid.kidGender,
            kidAge: kid.kidAge,
            cardNum: card.cardNum,
            cardDate: card.cardDate,
            cardPassword: card.cardPassword,
            birthDate: card.birthDate,
            userIdx: card.userIdx
        }));

    } catch (error) {
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.CREATE_KID_INFO_FAIL));
    }
}

module.exports = {
    createKid
}