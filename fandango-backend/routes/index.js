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
var getLimitedMovies = require('./admin/getLimitedMovies');
var addMovieSchedule = require('./moviehall/addMovieSchedule');
var getMovieSchedule = require('./moviehall/getMovieSchedule');
var deleteMovieSchedule = require('./moviehall/deleteMovieSchedule');
var getRevenueByMovie = require('./moviehall/getRevenueByMovie');
var uploadFile = require('./admin/uploadFile');
var cancelBooking = require('./moviehall/cancelBooking');
var searchBooking = require('./moviehall/searchBooking');
var topTenMoviesByRevenue = require('./admin/topTenMoviesByRevenue');
var cityWiseMovieRevenue = require('./admin/cityWiseMovieRevenue');
var topTenHallByTickets = require('./admin/topTenHallByTickets');

//acquiring user logic
const Signup = require('./users/sign_up');
const Signin = require('./users/login');
const logout = require('./users/logout');
const deleteUser = require('./users/deleteuser');
const getProfile = require("./users/getProfile");
const updateProfile = require('./users/updateProfile');
const checkLogin = require('./users/checklogin');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addMovie', function (req, res, next) {
  console.log('ADD MOVIE API');
  addMovie.addMovieRouterFn(req, res, next);
});

router.post('/getMovies', function (req, res, next) {
  console.log('GET MOVIES API');
  getMovie.getMovieRouterFn(req, res, next);
});

router.post('/addHall', function (req, res, next) {
  console.log('ADD HALL API');
  addHall.addHallRouterFn(req, res, next);
});

router.post('/getHalls', function (req, res, next) {
  console.log('GET HALLS API');
  getHall.getHallRouterFn(req, res, next);
});

router.post('/addScreen', function (req, res, next) {
  console.log('ADD SCREEN API');
  addScreen.addScreenRouterFn(req, res, next);
});

router.post('/getScreens', function (req, res, next) {
  console.log('GET SCREENS API');
  getScreen.getScreenRouterFn(req, res, next);
});

router.post('/editMovie', function (req, res, next) {
  console.log('EDIT MOVIE API');
  editMovie.editMovieRouterFn(req, res, next);
});

router.post('/editHall', function (req, res, next) {
  console.log('EDIT HALL API');
  editHall.editHallRouterFn(req, res, next);
});

router.post('/editScreen', function (req, res, next) {
  console.log('EDIT SCREEN API');
  editScreen.editScreenRouterFn(req, res, next);
});

router.post('/getLimitedMovie', function (req, res, next) {
  console.log('GET Limited MOVIES API');
  getLimitedMovies.getLimitedMovieRouterFn(req, res, next);
});

router.post('/getRevenueByMovie', function (req, res, next) {
  console.log('GET Revenue by MOVIES API');
  getRevenueByMovie.getRevenueByMovieRouterFn(req, res, next);
});

router.post('/getCityWiseRevenueByMovie', function (req, res, next) {
    console.log('GET City Wise Revenue by MOVIE');
    cityWiseMovieRevenue.cityWiseMovieRevenueRouterFn(req, res, next);
});

router.get('/topTenMoviesByRevenue', function (req, res, next) {
    console.log('GET Top TEN movies by Revenue API');
    topTenMoviesByRevenue.topTenMoviesByRevenueRouterFn(req, res, next);
});

router.get('/topTenHallByTickets', function (req, res, next) {
    console.log('GET Top TEN Halls by no of tickets sold Last Month API');
    topTenHallByTickets.topTenHallByTicketsRouterFn(req, res, next);
});

router.post('/addMovieSchedule', function (req, res, next) {
  console.log('ADD MOVIE SCHEDULE API');
  addMovieSchedule.addMovieScheduleRouterFn(req, res, next);
});

router.post('/getMovieSchedules', function (req, res, next) {
  console.log('GET MOVIE SCHEDULES API');
  getMovieSchedule.getMovieScheduleRouterFn(req, res, next);
});

router.delete('/deleteMovieSchedule', function (req, res, next) {
  console.log('Delete MOVIE SCHEDULES API');
  deleteMovieSchedule.deleteMovieScheduleRouterFn(req, res, next);
});

router.post('/cancelBooking', function (req,res,next) {
  console.log('CANCEL BOOKING API');
  cancelBooking.cancelBookingRouterFn(req,res,next);
});

router.post('/searchBooking', function (req,res,next) {
  console.log('CANCEL BOOKING API');
  searchBooking.searchBookingRouterFn(req,res,next);
});

router.post('/Signup', function (req, res, next) {
  console.log('SIGNUP API');
  Signup.signUpRouterFn(req, res, next);
});

router.post('/Signin', function (req, res, next) {
  console.log('SIGN IN API');
  Signin.loginRouterFn(req, res, next);
});

router.post('/Signout', function (req, res, next) {
  console.log('SIGN OUT API');
  logout.logoutRouterFn(req, res, next);
});

router.post('/deleteUser', function (req, res, next) {
  console.log('DELETE USER API');
  deleteUser.deleteUserRouterFn(req, res, next);
});

router.post('/getProfile', function (req,res,next) {
    console.log('GET PROFILE API');
    getProfile.getProfileRouterFn(req,res,next);
});

router.post('/updateProfile', function (req,res,next) {
    console.log('UPDATE PROFILE API');
    updateProfile.updateProfileRouterFn(req,res,next);
});

router.post('/uploadFile', function (req,res,next) {
  console.log('UPLOAD FILE API');
  uploadFile.uploadFileRouterFn(req,res,next);
});

router.post('/checklogin', function (req,res,next) {
    console.log('CHECK SESSION API');
    checkLogin.checkLoginRouterFn(req,res,next);
});

module.exports = router;
