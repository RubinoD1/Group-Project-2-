// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
      // define an id column
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
      },
      // define product_name column
      product_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      // define price column
      price: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: true,
          //validation check for decimal 
          validate: {
              isDecimal: true
          }
      },
      // define desired price column
      desired_price: {
          type: DataTypes.DECIMAL(10,2),
          allowNull: true,
          
          //validation check for numeric value 
          validate: {
            isDecimal: true
        }
     },
     // no limit is being set for product notes 
      product_note: {
       type: DataTypes.TEXT,
          allowNull: true,
          validate: {
            len: [1]
          }
     },
     // desired quantity column -- default is 1 
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        //validation check for numeric value 
        validate: {
            isNumeric: true
        }
     },
      // define category_id column
      category_id: {
          type: DataTypes.INTEGER,   
          references: {
              model: "category",
              key: "id"
          }
      },
      image_name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
