const router = require('express').Router();
const { List } = require('../../models');

// Get all List associated to a User
router.post('/:id', (req, res) => {
  List.findAll({
    where: {
      email: req.body.email,
    },
  })
    .then((dbListData) => {
      if (!dbListData) {
        res.status(404).json({ message: 'No List found with this id' });
        return;
      }
      const lists = dbListData.map((list) => list.get({ plain: true }));
      console.log(lists);
      res.status(200).json({ message: lists });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create new List
router.post('/', (req, res) => {
  List.create({
    email: req.body.email,
    wish_list: req.body.lists,
  })
    .then((dbListData) => {
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
