const express = require('express')
const router = express.Router()
const app = express()
const passport = require('passport')
const fs = require('fs')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()

router.use((req, res, next) => {
  res.currentUser = req.user;
  next();
});

router.use('/', require('./application.js'))
router.use('/users', require('./user'))
router.use('/spots', require('./spots'))

router.get('/', function(req, res, next) {
  rs.readFile(xmlfile, "utf-8", function(err, text) {

      if (error) {
          throw error;
      } else {
          parser.parseString(text, function (err, result) {
              var surfman = result['id']['surf_am'];
              res.render('index', { surf_am : surf_am })
          })
      }
  })
})




router.all('*', (req, res) => {
  res.status(400).send();
});

module.exports = router