const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const passport = require('passport')
const User = require('../models/users')
const Spots = require('../models/users')
const flash = require('connect-flash')
const session = require('express-session')



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
function login (res, req) {
    res.render('users/login', { message: req.flash('loginMessage') }  );
}

// Post login page

function newLogin (res, req) {
    var loginStrategy = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
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

module.exports = {

    login: login,
    newLogin: newLogin,
    usersignUp: usersignUp,
    createUser: createUser,
    logout: logout,
    secret: secret
}