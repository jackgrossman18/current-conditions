const express = require("express");
const router = express.Router();
const spotsController = require('../controllers/spots.js')

// // Get Index
router.get('/spots/index', spotsController.spotIndex)

module.exports = router