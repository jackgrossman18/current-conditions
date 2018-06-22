const User = require("../models/users");
const Spots = require("../models/spots")
const bcrypt = require("bcrypt-nodejs");

// const createPassword = password =>
// crypt.hashSync(password, bcrypt.genSaltSync(8), null);

// User.find({})
// .then(() => {
    // User.findByIdAndUpdate(id, { $set: { favoriteSpots: 'large' }}, { new: true }, function (err, tank) {
    //     if (err) return handleError(err);
    //     res.send(User);
// User.update.remove(() => {
// User.find({}).remove(() => {
//       }
//     }).then(user => {
//       Promise.all([
//         User.create({}).then(user => {}),
//         User.create({}).then(tweet => {})
//       ]).then(() => {
//         user.save(err => console.log(err));
//       });
//     });