const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.js')
const applicationController = require('../controllers/application')
var LocalStrategy = require('passport-local').Strategy
const passport = require('passport')

// Get Index
router.get('/', applicationController.index)

// Get Signup Page to create an newuser 
router.get('/new', userController.usersignUp)

// POST to create new user
router.post('/new', userController.createUser)

// GET all of users spots
// router.get('/my_favorite_spots', userController.myfavoriteSpots)

// GET login page for users with an account
router.get('/login', userController.login)

//POST for users to be redirected to once they enter thier login information
router.post('/login', userController.newLogin)

// Get page allowing users that are signed in to logout
router.get('/logout', userController.logout)

router.get('/secret', userController.secret)

module.exports = router