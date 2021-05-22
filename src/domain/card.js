module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Card', {
        bankName: {
            type: DataTypes.STRING(4),
            allowNull: false,
        },
        cardNum: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        cardDate: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        cardPassword: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        userIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};