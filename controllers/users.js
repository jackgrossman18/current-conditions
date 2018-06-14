const express = require('express')
const User = require('../models/users')
const Spots = require('../models/users')
const passport = require('passport')

module.exports = {
    show: (req, res) => {
        User.findOne({_id: req.params._id})
        .then(user => {
            res.render('users/show', { user } )
        })
    },
    login: (req, res) => {
        res.render('user/show', { user })
    },
    createLogin: (req, res) => {
        var loginStrategy = passport.authenticate('local-login', {
            successRedirect: '/:id',
            failureRedirect: '/login',
            failureFlash: true
        })
        return loginStrategy(req, res)
    },
    newUser: (req, res) => {
        res.render('users/new', { message: 'Welcome to Current Conditions'} )
    },
    createUser: (req, res) => {
            var signupStrategy = passport.authenticate('local-signup', 
            {
                successRedirect: '/',
                failureRedirect: 'users/new',
                failureFlash: true
            })
        return signupStrategy(req, res)
    },
    logout: (req, res) => {
        req.logout()
        res.redirect('/')
    }
  }