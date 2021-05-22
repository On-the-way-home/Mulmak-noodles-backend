'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {}
  };
  Payment.init({
    card_number: DataTypes.STRING,
    card_password: DataTypes.STRING,
    card_birth: DataTypes.STRING,
    card_bank: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};