const  User  = require('../model/User')

module.exports = {
    index: (req, res) => {
        res.render("app/index", { user })
    }
};