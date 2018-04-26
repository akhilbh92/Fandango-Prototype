// //Import modules
// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var cors = require('cors');
// var expressSessions = require("express-session");
// var mongoStore = require("connect-mongo")(expressSessions);
// var passport = require('passport');
// var passportFile = require('./routes/passport')(passport);
// var index = require('./routes/index');
// var app = express()
// //Mongo Database URL
// var mongoSessionURL = 'mongodb://admin:admin@ds023644.mlab.com:23644/fandangodb';
// // React Server URL
// var reactServerURL = 'http://localhost:3000';
// // Session Configuration with mongo store
// app.use(expressSessions({
//     secret: 'cmpe273_fandango_passport',
//     resave: false,
//     saveUninitialized: true,
//     duration: 30 * 60 * 1000,
//     activeDuration: 5 * 6 * 1000,
//     store: new mongoStore({
//         url: mongoSessionURL
//     })
// }));
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(cookieParser());
// app.use(logger('dev'));
// // parse application/json
// app.use(bodyParser.json());
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(methodOverride());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());
// // Local URL can change for live
// var corsOptions = {
//     origin: reactServerURL,
//     credentials: true,
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use(cors(corsOptions))
// app.set('port', process.env.PORT || 3001);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

// module.exports = app;

var express = require('express');
var path = require('path');
var logger = require('morgan');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var index = require('./routes/index');
var session = require("express-session");
var mongoSessionURL = "mongodb://admin:admin@ds023644.mlab.com:23644/fandangodb";
var mongoStore = require("connect-mongo")(session);
var passportFile = require('./routes/users/passport');
var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var fs = require('fs');

// React Server URL
var reactServerURL = 'http://localhost:3000';

const cors = require('cors');

var fileUpload = require('express-fileupload')

var app = express();


app.set('port', process.env.PORT || 3001);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(session({
  secret: "CMPE273_passport",
  resave: false,
  //Forces the session to be saved back to the session store, even if the session was never modified during the request
  saveUninitialized: false, //force to save uninitialized session to db.
  //A session is uninitialized when it is new but not modified.
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 6 * 1000,
  store: new mongoStore({
      url: mongoSessionURL
  })
}));

app.use(passportFile.initialize());
app.use(passportFile.session());

//Cross-Origin connection
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

app.use(cors({
  origin: reactServerURL,
  credentials: true
}));

app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Fandango backend Server is up and running at port ' + app.get('port'));

});


