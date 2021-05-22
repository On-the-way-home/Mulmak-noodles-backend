module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Center', {
        centerName: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
};