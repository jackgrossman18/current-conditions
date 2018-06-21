const express = require('express')
const flash = require('connect-flash')
const hbs = require('hbs')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const session = require('express-session')
const userController = require('./controllers/users')
const passport = require('passport') 
const xml2js = require('xml2js')
const mongoose = require('mongoose')
const cors = require('cors')
const override = require('method-override')


const app = express()

mongoose.connect('mongodb://localhost/currentconditions_db');

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(override('_method'))
app.use(cookieParser())
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'));

// var allowedOrigins = [

//   'https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=390',
//   'https://magicseaweed.com/api/0be72c50101bffb095ef01df8958a606/forecast/?spot_id=391'
// ]
app.use(cors())

// hbs.registerPartials(__dirname + "/views/partials");
// hbs.registerHelper("log", function(data) {
//   let context = { ...data };
//   delete context.settings;
//   delete context.body;
//   console.log(context);
//   return JSON.stringify(context);
// });
// app.configure(function() {
//   app.use(express.static('public'));
//   app.use(express.cookieParser());
//   app.use(express.bodyParser());
//   app.use(express.session({ secret: 'keyboard cat' }));
//   app.use(passport.initialize());
//   app.use(passport.session());
//   app.use(app.router);
// });

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(session({secret:"Great, now you can start selecting your favorite spots", resave: false, saveUninitialized: false}))
app.use(flash())

app.use(require('./routes/index'))

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next()
})

app.set('port', process.env.PORT || 5000 )
app.listen(app.get('port'),function () {console.log('CORS-enabled web server listening on port 80')}, () => console.log("Its Working"));
