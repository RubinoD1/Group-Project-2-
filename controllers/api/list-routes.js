const router = require('express').Router();
const sequelize = require('sequelize');
const {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
  List,
  ListTag,
} = require('../../models');

router.get('/:id', (req, res) => {
  List.findAll({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'desired_price',
          'product_note',
          'quantity',
          'category_id',
          'user_id',
          'image_name',
        ],
      },
    ],
  })
    .then((dbListData) => {
      let lists = dbListData.map((list) => list.get({ plain: true }));
      let products = lists.map((list) => list.products);

      let category = res.render('viewlist', {
        products,
        lists,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/', (req, res) => {
  List.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Product,
        attributes: [
          'id',
          'product_name',
          'price',
          'desired_price',
          'product_note',
          'quantity',
          'category_id',
          'user_id',
          'image_name',
        ],
      },
    ],
  })
    .then((dbListData) => {
      let lists = dbListData.map((list) => list.get({ plain: true }));
      let products = lists.map((list) => list.products);
      console.log(products);
      let category = res.render('viewlist', {
        products,
        lists,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create new List
router.post('/', (req, res) => {
  console.log(req.session.user_id);
  List.create({
    user_id: req.session.user_id,
    list_name: req.body.list_name,
  })
    .then((dbListData) => {
      console.log(dbListData);
      if (!dbListData) {
        res.status(404).json({ message: 'No List found with this id' });
        return;
      }
      res.status(200).json(dbListData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create Product added to List
router.post('/list-product', (req, res) => {
  ListTag.create({
    product_id: req.body.product_id,
    list_id: req.body.list_id,
  })
    .then((dbListData) => {
      console.log(dbListData);
      if (!dbListData) {
        res.status(404).json({ message: 'No List found with this id' });
        return;
      }
      res.status(200).json(dbListData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
