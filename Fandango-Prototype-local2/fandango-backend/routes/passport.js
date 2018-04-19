var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var kafka = require('../kafka/client');

module.exports = function (passport) {
    passport.use('login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, function (email, password, done) {
        //TODO: Find user in the system and check valid password logic
    }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
};