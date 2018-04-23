var express = require('express');
var router = express.Router();


var addMovie = require('./admin/addMovie');
var getMovie = require('./admin/getMovie');
var addHall = require('./admin/addHall');
var getHall = require('./admin/getHall');
var addScreen = require('./admin/addScreen');
var getScreen = require('./admin/getScreen');
var editMovie = require('./admin/editMovie');
var editHall = require('./admin/editHall');
var editScreen = require('./admin/editScreen');

//acquiring user logic
const Signup = require ('./users/sign_up');
const Signin = require ('./users/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addMovie', function(req, res, next){
    console.log('ADD MOVIE API');
    addMovie.addMovieRouterFn(req, res, next);
});

router.post('/getMovies', function(req, res, next){
  console.log('GET MOVIES API');
  getMovie.getMovieRouterFn(req, res, next);
});

router.post('/addHall', function(req, res, next){
  console.log('ADD HALL API');
  addHall.addHallRouterFn(req, res, next);
});

router.post('/getHalls', function(req, res, next){
  console.log('GET HALLS API');
  getHall.getHallRouterFn(req, res, next);
});

router.post('/addScreen', function(req, res, next){
  console.log('ADD SCREEN API');
  addScreen.addScreenRouterFn(req, res, next);
});

router.post('/getScreens', function(req, res, next){
  console.log('GET SCREENS API');
  getScreen.getScreenRouterFn(req, res, next);
});

router.post('/editMovie', function(req, res, next){
  console.log('EDIT MOVIE API');
  editMovie.editMovieRouterFn(req, res, next);
});

router.post('/editHall', function(req, res, next){
  console.log('EDIT HALL API');
  editHall.editHallRouterFn(req, res, next);
});

router.post('/editScreen', function(req, res, next){
  console.log('EDIT SCREEN API');
  editScreen.editScreenRouterFn(req, res, next);
});

router.post('/Signup', function (req,res,next) {
    console.log('SIGNUP API');
    Signup.signUpRouterFn(req,res,next);
});

router.post('/Signin', function (req,res,next) {
    console.log('SIGN IN API');
    Signin.loginRouterFn(req,res,next);
});

module.exports = router;
