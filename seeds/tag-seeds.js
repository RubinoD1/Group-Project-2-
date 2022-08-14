const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'low',
  },
  {
    tag_name: 'medium',
  },
  {
    tag_name: 'high',
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
