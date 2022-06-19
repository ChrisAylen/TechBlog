const router = require('express').Router();
const userRoutes = require('./user-routes');
//const blogRoutes = require('./blogRoutes');
//const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
//router.use('/blog', blogRoutes);
//router.use('/comment', commentRoutes);

module.exports = router;
