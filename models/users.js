const mongoose = require('../db/connection')
const Spots = require('../models/spots')
var bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema

const User = new Schema({
        email: { type: String },
        password: { type: String },
        createdAt: Date,
        favoriteSpots: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Spots'
            }
        ]

});

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

// User.pre('save', function(next) {

// })

// User.save((err) => {
//     if(err) throw err;

//     console.log("Find out where it's on")

// })

module.exports = mongoose.model("User", User)