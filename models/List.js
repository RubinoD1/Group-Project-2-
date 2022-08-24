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
    list_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // product_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'product',
    //     key: 'id',
    //   },
    // },
  },
  { sequelize, freezeTableName: true, underscored: true, modelName: 'list' }
);

module.exports = List;
