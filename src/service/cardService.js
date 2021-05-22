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
