// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: { // id column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      primaryKey: true, // set as primary key
      autoIncrement: true // uses auto increment
    },
    product_name: { // product_name column
      type: DataTypes.STRING, // string
      allowNull: false // doesn't allow null values
    },
    price: { // price column
      type: DataTypes.DECIMAL, // decimal
      allowNull: false, // doesn't allow null values
      validate: { // validates that the value is a decimal
        isDecimal: true
      }
    },
    stock: { // stock column
      type: DataTypes.INTEGER, // integer
      allowNull: false, // doesn't allow null values
      defaultValue: 10, // set a default value of 10
      validate: { // validates that the value is numeric
        isNumeric: true
      }
    },
    category_id: { // category_id column
      type: DataTypes.INTEGER, // integer
      references: { // references the category model's id
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
