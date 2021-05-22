const { Kid } = require("../domain");
const { Card } = require("../domain");
const { Center } = require("../domain");

//center name으로 어린이집 id 조회
//만약에 등록이 안 되어 있는 어린이집이라면.. 등록 후 조회해야
const readCenterIdx = async (centerName) => {
    try {
        const centerIdx = await Center.findOne({
            where: {
                centerName: centerName,
            }
        })
        return centerIdx.id;
    } catch (err) {
        throw err;
    }
}

// passport 작업 이후 userIdx 수정 필요
const createKidInfo = async (centerIdx, kidName, kidGender, kidAge, userIdx) => {
    try {
        const kid = await Kid.create({
            CenterId: centerIdx,
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

const createCardInfo = async (cardNum, cardDate, cardPassword, birthDate, userIdx) => {
    try {
        const card = await Card.create({
            bankName: '국민',
            cardNum: cardNum,
            cardDate: cardDate,
            cardPassword: cardPassword,
            birthDate: birthDate,
            UserId: userIdx,
        });
        return card;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    readCenterIdx,
    createKidInfo,
    createCardInfo,
}