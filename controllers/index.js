const  User  = require('../model/User')

module.exports = {
    index: (req, res) => {
        User.find({}) 
            .sort({ createdAt: -1})
            .populate("User")
            .then (user => {
                res.render("app/index", { user })
            })
    }
};