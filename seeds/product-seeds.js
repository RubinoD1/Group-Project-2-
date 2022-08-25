const { Product } = require('../models');

const productData = [
  {
    product_name: 'Harry Potter',
    price: '29.99',
    desired_price: '29.99',
    product_note: 'It is perfect for the kids.',
    category_id: '1',
    user_id: '1',
    image_name: '2022813213814.png',
    tagIds: [1],
  },
  {
    product_name: 'War and Peace',
    price: '29.99',
    desired_price: '21.99',
    product_note: 'I need this book for my English course.',
    category_id: '1',
    user_id: '1',
    image_name: 'Tolstoy.jpg',
    tagIds: [1],
  },
  {
    product_name: 'Bulk case of computer paper',
    price: '59.99',
    quantity: '2',
    category_id: '11',
    user_id: '1',
    image_name: '2022813213855.png',
    tagIds: [1],
  },
  {
    product_name: 'BenQ monitor',
    price: '299.99',
    desired_price: '199',
    product_note: 'For my new gaming rig.',
    quantity: '2',
    category_id: '6',
    user_id: '1',
    image_name: '2022813213912.png',
    tagIds: [2],
  },
  {
    product_name: 'weights',
    price: '599.99',
    desired_price: '449.99',
    product_note: 'Buff boy in the new year',
    category_id: '10',
    user_id: '1',
    image_name: '2022813213922.png',
    tagIds: [3],
  },
  {
    product_name: 'Air fryer',
    price: '99.99',
    desired_price: '89.99',
    category_id: '8',
    user_id: '1',
    image_name: '2022813213943.png',
    tagIds: [1],
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
