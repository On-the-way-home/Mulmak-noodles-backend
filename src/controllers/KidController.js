const express = require('express');
const route = express.Router();
const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const userService = require('../service/userService');
const kidService = require('../service/kidService');

const createKid = async (req, res) => {
    try {
        const { centerName, kidName, kidGender, kidAge, cardNum, cardDate, cardPassword, birthDate, UserId } = req.body;

        //입력이 모두 들어왔는지 확인
        if (!centerName || !kidName || !kidGender || !kidAge || !cardNum || !cardDate || !cardPassword || !birthDate || !UserId) {
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }

        //어린이집 id 조회
        let CenterId;
        try {
            CenterId = await kidService.readCenterIdx(centerName);
        } catch {
            CenterId = await kidService.createCenterIdx(centerName);
        }

        //조회한 어린이집 id 포함해서 create
        const kid = await kidService.createKidInfo(CenterId, kidName, kidGender, kidAge, UserId);
        //결제 정보는 card table에 create
        const card = await kidService.createCardInfo(cardNum, cardDate, cardPassword, birthDate, UserId);

        //결과 출력
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATE_KID_INFO_SUCCESS));

    } catch (error) {
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.CREATE_KID_INFO_FAIL));
    }
}

const showKid = async (req, res) => {
    try {
        const UserId = req.params.UserId;

        //kid 정보 배열
        var child = [];
        const kidInfo = await kidService.showKidInfo(UserId);
        for (var i = 0; i < kidInfo.length; i++) {
            var data = new Object();
            data.bankAccount = await kidService.showCardInfo(kidInfo[i]["UserId"]);
            data.childHouseName = await kidService.showCenterInfo(kidInfo[i]["CenterId"]);
            data.childName = kidInfo[i]["kidName"];
            data.gender = kidInfo[i]["kidGender"];
            data.age = kidInfo[i]["kidAge"];
            child.push(data);
        }

        const cost = await userService.checkAllCost(UserId);
        //const count = await userService.checkAllCount(UserId); 현재 count를 셀 수 없음. 디자인대로 4 보내줌

        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.READ_CHILDREN_ALL_SUCCESS, {
            child,
            cost: cost,
            count: 4
        }));
    } catch (error) {
        console.log(error);
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.READ_CHILDREN_ALL_FAIL));
    }
}

module.exports = {
    createKid,
    showKid
}