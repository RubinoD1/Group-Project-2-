const router = require('express').Router();
const path = require('path');
const sequelize = require('../config/connection');
//const { Post, User, Comment} = require('../models');
const { Product, Category, Tag,ProductTag } = require('../models');


const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/');
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().getFullYear().toString() +
        (new Date().getMonth() + 1).toString() +
        new Date().getDate().toString() +
        new Date().getHours().toString() +
        new Date().getMinutes().toString() +
        new Date().getSeconds().toString() +
        file.originalname.slice(-4)
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.post('/send_file', upload.array('img', 1), (req, res, next) => {
  let tagid=req.body.tag_id;
  Product.create({
    product_name : req.body.product_name ,
    price:req.body.price ,
    desired_price:req.body.desired_price ,
    product_note:req.body.product_note ,
    quantity:req.body.quantity ,
    category_id:req.body.category_id ,
    user_id:req.session.user_id,
    image_name: req.files[0].filename,
})
  .then((productIds) => {
   console.log(productIds);   
   ProductTag.create({
    product_id:productIds.dataValues.id,
    tag_id: tagid
   }) 
  })
  .then((productTagIds) => {
   res.redirect('/dashboard');
  })
  .catch((err) => {
      console.log(err);
      res.status(400).json(err);
  });

});

router.post('/category', (req, res) => {
  // To insert data SQL's .create() method is used. 
  // A key/value pair is used where the key is what defined the Category model and values are what we get from req.body.
  console.log("*****************xxxxxx***************");
  console.log(req);
  Category.create({
      category_name: req.body.category_name
  })
      .then(dbCategoryData => {
        //res.json(dbCategoryData);
        res.redirect('/dashboard');
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


// get all posts for homepage
router.get('/', (req, res) => {
        let cats,tags;
        console.log('======================home all');
        Category.findAll({
          attributes: ['id', 'category_name'],
        })
          .then(dbPostData => {
            cats = dbPostData.map(post => post.get({ plain: true }));
            console.log(cats);
            return Tag.findAll({
              attributes: ['id', 'tag_name'],
          })
        })
          .then(dbTagData => {
            tags = dbTagData.map(post => post.get({ plain: true }));
            let cat=JSON.stringify(cats);
            res.render('createitems', {
              cats,
              tags,
              cat,
              loggedIn: req.session.loggedIn
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });

      
module.exports = router;