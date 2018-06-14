const express = require('express')
const router = express.Router()


router.use('/', require('./application.js'))
router.use('/users', require('./user'))
router.use('/spots', require('./spots'))

// router.use((req, res, next) => {
//   res.local.currentUser = req.user;
//   next();
// });

router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router