const express = require("express");
const router = express.Router();
const spotsController = require('../controllers/spots.js')

// // Get Index
router.get('/index', spotsController.spotIndex)

router.get('/my-favorite-spots', spotsController.myFavSpots)


module.exports = router