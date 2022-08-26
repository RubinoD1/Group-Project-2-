const router = require('express').Router();
const passport = require('passport');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

const { User, Product, Category, Tag, image } = require('../models');

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/logout', (req, res) => {
  res.render('login');
});

// Google Outh
router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/oauth2/redirect/google',
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);

// Redirecting to dashboard
// get all posts for homepage
router.get('/dashboard', withAuth, (req, res) => {
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
      res.render('dashboard', {
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

// Get All Category
router.get('/category', (req, res) => {
  res.render('categorypage');
});

// Get All Category
router.get('/products', (req, res) => {
  Category.findAll({})
    .then((dbCategoryData) => {
      const category = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render('product', { category });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/product/:id', (req, res) => {
  Product.findAll({
    where: {
      id: req.params.id,
    },
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
      res.render('edit-products', {
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
