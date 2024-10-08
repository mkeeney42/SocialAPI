const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes')

// Both of these of routes are prefixed with '/api'
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);


module.exports = router;