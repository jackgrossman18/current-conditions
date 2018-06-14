const Users  = require('../models/spots.js')

module.exports = {
    index: (req, res) => {
       res.render('spots/index');
    }
}