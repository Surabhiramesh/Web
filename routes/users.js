var express = require('express');
var router = express.Router();
var passport = require('./auth.js');
var mongoose = require('mongoose');
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var moment = require('moment');
var multer = require('multer');
var nodemailer = require('nodemailer');
var async = require('async');
var crypto = require('crypto');
var csv = require("fast-csv");
var rn = require('random-number');
var farmers = mongoose.model('farmers');
var stories = mongoose.model('stories');
var messages = mongoose.model('messages');
var users = mongoose.model('users');
var admin = require("firebase-admin");
var request = require('request');
var async = require("async");
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;



