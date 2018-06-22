 const Users  = require('../models/users.js')

module.exports = {
    index: (req, res) => {
       res.render('app/index', { _id: req.session.passport  });
    }
}