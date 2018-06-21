const User = require('../models/users')
const Spots = require('../models/spots')

function spotIndex (req, res) {
    res.render('/spots/index')
}

module.exports = {
    spotIndex: spotIndex
}