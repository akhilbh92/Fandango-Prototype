var kafka = require('../../kafka/client');
'use strict';
// Import helpers
let resFormat = require("../../helpers/res_format");
var auth = require('passport-local-authenticate');
var passport = require('passport');
var localStrategy = require("passport-local").Strategy;

// Main function to login user route
let loginRouterFn = function (req, res, next) {

	passport.authenticate('login', function (err, user, info) {
		// Code for authenticating user and returning response
	})(req, res);
};


module.exports.loginRouterFn = loginRouterFn;