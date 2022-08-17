const userRoutes = require('./../api/user-routes');
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');
const listRoutes = require('./list-routes');
const router = require('express').Router();

// Routes
router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/lists', listRoutes);

module.exports = router;
