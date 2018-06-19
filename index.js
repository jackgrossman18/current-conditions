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


const app = express()


app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser())
app.set("view engine", "hbs")
app.use(express.static(__dirname + '/public'));


require('./config/passport')(passport)

app.use(passport.initialize())
app.use(passport.session())

app.use('/static', express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("log", function(data) {
  let context = { ...data };
  delete context.settings;
  delete context.body;
  console.log(context);
  return JSON.stringify(context);
});


app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash())


app.use(passport.initialize())
app.use(passport.session())

app.use(session({secret:"Great, now you can start selecting your favorite spots"}))
app.use(require('./routes/index'))

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next()
})

app.set('port', process.env.PORT || 5000 )
app.listen(app.get('port'), () => console.log("Its Working"));
