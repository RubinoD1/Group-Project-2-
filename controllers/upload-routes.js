const router = require('express').Router();
const path = require('path');
const sequelize = require('../config/connection');
//const { Post, User, Comment} = require('../models');
const { Product, Category, Tag } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================home all');
  Product.findAll({
    attributes: [
      'id',
      'product_name',
      'price',
      'desired_price',
      'product_note',
      'quantity',
      'category_id',
      'image_name',
    ],
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
      },
    ],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log(posts);
      let cat = [];
      let temp = 1;
      for (let i = 0; i < posts.length; i++) {
        cat[i] = posts[i].category;
      }
      const result = cat.filter(
        (thing, index, self) =>
          index ===
          self.findIndex((t) => JSON.stringify(t) === JSON.stringify(thing))
      );
      let cats = JSON.stringify(result);
      res.render('createitems', {
        posts,
        cats,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
