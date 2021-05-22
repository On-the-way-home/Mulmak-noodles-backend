module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        kakao: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        cost: {
            type: DataTypes.INTEGER,
            defaultValue: 59340,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};