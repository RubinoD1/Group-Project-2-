const { Image } = require('../models');

const imageData = [
  {
    image_name: '2022813213814.png',
  },
  {
    image_name: '2022813213835.png',
  },
  {
    image_name: '2022813213855.png',
  },
  {
    image_name: '2022813213912.png',
  },
  {
    image_name: '2022813213922.png',
  },
  {
    image_name: '2022813213943.png',
  }
];

const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;
