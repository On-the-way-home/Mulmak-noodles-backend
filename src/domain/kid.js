module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Kid', {
        centerName: {
            type: DataTypes.STRING(30),
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
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};