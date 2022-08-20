const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const uploadRoutes = require('./upload-routes.js');
const shoppingRoutes = require('./shopping-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/upload', uploadRoutes);
router.use('/api', apiRoutes);
router.use('/shopping', shoppingRoutes);

module.exports = router;

