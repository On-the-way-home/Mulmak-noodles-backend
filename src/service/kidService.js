const { Kid } = require("../domain");
const { Card } = require("../domain");
const { Center } = require("../domain");
const { User } = require("../domain");

const readCenterIdx = async (centerName) => {
    try {
        const CenterId = await Center.findOne({
            where: {
                centerName: centerName,
            }
        })
        return CenterId.id;
    } catch (err) {
        throw err;
    }
}

const showCardInfo = async (UserId) => {
    try {
        const CardInfo = await Card.findOne({
            where: {
                UserId: UserId,
            }
        })
        const result = CardInfo.bankName + ' **' + CardInfo.cardNum.substring(0, 4) + ' 개인';  //예시대로 형태 만듦
        return result;
    } catch (err) {
        throw err;
    }
}
const showCenterInfo = async (CenterId) => {
    try {
        const CenterInfo = await Center.findOne({
            where: {
                id: CenterId,
            }
        })
        return CenterInfo.centerName;
    } catch (err) {
        throw err;
    }
}

const createCenterIdx = async (centerName) => {
    try {
        const center = await Center.create({
            centerName: centerName
        });
        return center.id;
    } catch (err) {
        throw err;
    }
}

// passport 작업 이후 userIdx 수정 필요
const createKidInfo = async (CenterId, kidName, kidGender, kidAge, userIdx) => {
    try {
        const kid = await Kid.create({
            CenterId: CenterId,
            kidName: kidName,
            kidGender: kidGender,
            kidAge: kidAge,
            UserId: 1,
        });
        return kid;
    } catch (err) {
        throw err;
    }
}

const createCardInfo = async (cardNum, cardDate, cardPassword, birthDate, UserId) => {
    try {
        const card = await Card.create({
            bankName: '국민',
            cardNum: cardNum,
            cardDate: cardDate,
            cardPassword: cardPassword,
            birthDate: birthDate,
            UserId: UserId,
        });
        return card;
    } catch (err) {
        throw err;
    }
}

const showKidInfo = async (UserId) => {
    try {
        const kid = await Kid.findAll({
            where: {
                UserId: UserId,
            },
            include: [
                {
                    model: User,
                },
            ],
        });
        return kid;
    } catch (err) {
        throw err;
    }
}



module.exports = {
    readCenterIdx,
    createCenterIdx,
    createKidInfo,
    createCardInfo,
    showKidInfo,
    showCardInfo,
    showCenterInfo
}