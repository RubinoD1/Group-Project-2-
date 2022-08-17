const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class List extends Model {}

List.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    wish_list: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: 'list' }
);

module.exports = List;
