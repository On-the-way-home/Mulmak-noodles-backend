module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Kid', {
        centerIdx: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        kidName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        kidGender: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        kidAge: {
            type: DataTypes.INTEGER,
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