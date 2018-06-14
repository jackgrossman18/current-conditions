const express = require('express')
const app = express()
const flash = require('connect-flash')
const hbs = require('hbs')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser");
const session = require('express-session')
const userController = require('./controllers/users')
const passport = require('passport') 

app.use(passport.initialize())
app.use(passport.session())
app.use(morgan('dev'))
app.use(cookieParser())


hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper("log", function(data) {
  let context = { ...data };
  delete context.settings;
  delete context.body;
  console.log(context);
  return JSON.stringify(context);
});

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/index'))
app.set("view engine", "hbs")




app.set('port', process.env.PORT || 5000 )
app.listen(app.get('port'), () => console.log("Its Working"));
