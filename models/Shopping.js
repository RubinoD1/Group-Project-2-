const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Shopping extends Model {}

Shopping.init(
  {
    // defines id column
    id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          //this is reference to the product model 
            model: "product",
            //this is the column name of the referenced model 
            key: "id"
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        //this is reference to the product model 
          model: "user",
          //this is the column name of the referenced model 
          key: "id"
      }
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shopping',
  }
);

module.exports = Shopping;
