const { Shopping } = require('../models');

const shoppingData = [
  {
    product_id: 1,
    user_id: 1,
  },
  {
    product_id: 3,
    user_id: 6,
  }
];

const seedShopping = () => Shopping.bulkCreate(shoppingData);

module.exports = seedShopping;
