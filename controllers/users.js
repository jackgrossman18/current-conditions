const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const User = require('../models/users')
const Spots = require('../models/spots')
const flash = require('connect-flash')
const session = require('express-session')


// Allow for login authentication 
function authenticatedUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();
  
    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

// Get signup

function usersignUp (req, res) {
    res.render('users/new',  { message: req.flash('signupMessage') } );
}

// Post signup

function createUser (req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/new',
        failureFlash: true
    });
    return signupStrategy(req, res)
}

// Get login page
function login (req, res) {
    res.render('users/login', { message: req.flash( 'loginMessage' )} );
}

// Post login page

function newLogin (req, res) {
    var loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlashw: true
    });
    return loginStrategy(req, res)
}

//Get logout
function logout(req, res) {
    req.logout()
    res.redirect('/')
}

// Restricted page

function secret(req, res) {
    res.render('secret')
}
function show (req, res)  {
    User.findOne({ _id: req.params._id })
    //   .populate({
    //     path: "Spots",
    //   })
      .then(user => {
        res.render("users/show", { currentUser });
      });
  }

module.exports = {

    login: login,
    newLogin: newLogin,
    usersignUp: usersignUp,
    createUser: createUser,
    logout: logout,
    secret: secret,
    show: show
}