'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init({
    email: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    scoreUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};
