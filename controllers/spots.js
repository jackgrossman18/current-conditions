const User = require('../models/users')
const Spots = require('../models/spots')


function spotIndex (req, res) {
    res.render('spots/index')
}

// function update (req, res) {
//     var content = req.body
//     User.findOne({_id: req.params.id})
//     .then( () => {
//         Promise.all([User.update({favoriteSpots: content})])
//         .then(spots => {User.spots.push(spots)})
// })



function myFavSpots (req, res) {
    res.render('spots/my-favorite-spots')
}

module.exports = {
    spotIndex: spotIndex,
    myFavSpots: myFavSpots,
    // update: update
}
