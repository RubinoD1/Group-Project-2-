const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Books',
  },
  {
    category_name: 'Video Games',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Movies',
  },
  {
    category_name: 'Clothes',
  },
  {
    category_name: 'Electronics',
  },
  {
    category_name: 'Outdoors',
  },
  {
    category_name: 'Cooking',
  },
  {
    category_name: 'Automotive',
  },
  {
    category_name: 'Sports',
  },
  {
    category_name: 'Office',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
