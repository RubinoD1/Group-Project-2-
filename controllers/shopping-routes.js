const router = require('express').Router();
const passport = require('passport');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');
const { Product, Category, Tag, Shopping } = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  Shopping.findAll({
    where: {
        user_id: req.session.user_id
    },
    attributes: [
        'id'
    ],
    include: [
        {
          model: Product,
          attributes: [ 
          'product_name',
          'price',
          'desired_price',
          'product_note',
          'quantity',
          'image_name'
          ],
        },
    ],
  })
    .then((dbPostData) => { 
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        console.log(posts);
        res.render('shoppinglist', {
            posts,
            loggedIn: req.session.loggedIn,
          });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/:id', (req, res) => {
    Shopping.create({
        user_id:req.session.user_id,
        product_id:req.params.id,
    })
        .then(dbShoppingData => res.redirect('/dashboard'))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

  router.delete('/:id', (req, res) => {
    Shopping.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbShoppingData => {
            if (!dbShoppingData) {
                res.status(404).json({ message: 'No tag found with this id' });
                return;
            }
            res.redirect('/dashboard');
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  });

module.exports = router;
