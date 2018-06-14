const express = require("express");
const router = express.Router();
const spotsController = require('../controllers/spots.js')

// Get Index
router.get('/', spotsController.index)

module.exports = router