const express = require('express')
const router = express.Router()
const app = express()
const passport = require('passport')

router.use((req, res, next) => {
  res.currentUser = req.user;
  next();
});

router.use('/', require('./application.js'))
router.use('/users', require('./user'))
router.use('/spots', require('./spots'))

router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router