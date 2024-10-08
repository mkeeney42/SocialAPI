const router = require('express').Router();
const apiRoutes = require('./api');
//const userRoutes = require('./api/userRoutes')

router.use('/api', apiRoutes);
//router.use('/api/users', userRoutes)

router.use('*', (req, res) => res.send("No Route For that Request"))


module.exports = router;