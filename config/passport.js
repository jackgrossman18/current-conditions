var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/users");

module.exports = function(passport) {
  passport.serializeUser(function(user, callback) {
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback) {
    User.findById(id, function(err, user) {
      callback(err, user);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, email, password, callback) {
        User.findOne({ "email": email }, function(err, user) {
          if (err) return callback(err);

          if (user) {
            return callback( null, false, req.flash( "signupMessage", "Don't be a kook, this email is already taken"));
          } else {
            
            let newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encrypt(password);

            newUser.save(function(err) {
              if (err) throw err;
              return callback(null, newUser);
            });
          }
        });
      }
    )
  );
  passport.use('local-login', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, email, password, callback) {

    // Search for a user with this email
    User.findOne({ 'email' :  email }, function(err, user) {
      if (err) { return callback(err);}

      // If no user is found
      if (!user) {
        return callback(null, false, req.flash('loginMessage', "We can't seem to find that email"));
      }
      // Wrong password
      if (!user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', "That password doesn't exist."));
      }
      console.log("Ya did it")

      return callback(null, user);
    });
  }));
};
