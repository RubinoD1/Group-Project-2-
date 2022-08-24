const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ListTag extends Model {}

ListTag.init(
  {
    // define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // define product_id column
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        //this is reference to the product model
        model: 'product',
        //this is the column name of the referenced model
        key: 'id',
      },
    },
    // define tag_id column
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        //this is reference to the list model
        model: 'list',
        //this is the column name of the referenced model
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list_tag',
  }
);

module.exports = ListTag;
