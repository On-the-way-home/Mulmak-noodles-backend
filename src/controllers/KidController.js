const express = require('express');
const route = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const kidService = require('../service/kidService');

const createKid = async (req, res) => {
    try {
        const { centerName, kidName, kidGender, kidAge, cardNum, cardDate, cardPassword, birthDate, userIdx } = req.body;

        //입력이 모두 들어왔는지 확인
        if (!centerName || !kidName || !kidGender || !kidAge || !cardNum || !cardDate || !cardPassword || !birthDate || !userIdx) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }

        //center name으로 어린이집 id 조회
        //만약에 등록이 안 되어 있는 어린이집이라면.. 등록 후 조회해야
        const centerIdx = await kidService.readCenterIdx(centerName);

        //조회한 어린이집 id 포함해서 create
        const kid = await kidService.createKidInfo(centerIdx, kidName, kidGender, kidAge, userIdx);

        //결제 정보는 card table에 create
        const card = await kidService.createCardInfo(cardNum, cardDate, cardPassword, birthDate, userIdx);

        //결과 출력
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATE_KID_INFO_SUCCESS, {
            centerName: kid.centerName,
            kidName: kid.kidName,
            kidGender: kid.kidGender,
            kidAge: kid.kidAge,
            bankName: card.bankName,
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

const showKid = async (req, res) => {

}

module.exports = {
    createKid,
    showKid
}