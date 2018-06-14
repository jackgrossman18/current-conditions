const User = require('../models/favoritespots')

module.exports = {
    show: (req, res) => {
        User.findOne ({ _id: req.params.id })
        .populate('spots')
        .exec((err, spots)
            .populate(spot.'addfavoritespot' { path: 'username'}, function(
                err,
                favoritespots
            ) 
            {
                user.favoritespot = favoritespot;
                res.render('index', favoritespots)
            }
        } )
            path:
        })
        .then(user => {
            res.render("favoritespots/show", { favoritespots })
        })
    },
    new: (req, res) => {
        User.find({}).then(users => {
            res.render('index', { users })
        })
        res.render("favoritespots/new")
    },
    create: (req, res) => {
        User.create({
            content: req.body.favoritespot.content
        }
        }).then(user => {
            res.redirect(`/favoritespots/${favoritespots._id}`)
        })
    }
}