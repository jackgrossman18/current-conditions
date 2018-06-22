const  User  = require('../model/User')
const Spots = require('../models/spots')

module.exports = {
    index: (req, res) => {
       res.render('app/index', {_id: req.params._id} );
    }
}