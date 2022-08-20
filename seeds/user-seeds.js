const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'test@gmail.com',
    password: 'password123'
  },
  {
    username: 'jwilloughway1',
    email: 'test1@gmail.com',
    password: 'password123'
  },
  {
    username: 'iboddam2',
    email: 'test2@gmail.com',
    password: 'password123'
  },
  {
    username: 'dstanmer3',
    email: 'test3@gmail.com',
    password: 'password123'
  },
  {
    username: 'djiri4',
    email: 'test444@gmail.com',
    password: 'password123'
  },
  {
    username: 'William',
    email: 'a@b.com',
    password: '1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;