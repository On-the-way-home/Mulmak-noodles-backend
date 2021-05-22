const { User } = require("../domain");

const checkUser = async (id) => {
    try {
        const UserId = await User.findOne({
            where: {
                kakao: id,
            }
        })
        return UserId.id;
    } catch (err) {
        throw err;
    }
}

const createUser = async (id) => {
    try {
        const user = await User.create({
            kakao: id
        });
        return user.id;
    } catch (err) {
        throw err;
    }
}

const checkAllCost = async (id) => {
    try {
        const cost = await User.findOne({
            where: {
                id: id,
            }
        })
        return cost.cost;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    createUser,
    checkUser,
    checkAllCost,
}