/**
 * put your server bootstrap code here
 * E.g. require dotenv, configure mongoose, start your server, etc.
 * Note: keep this separate from app.js for easier testing
 * */
'use strict';

require('dotenv').config();
<<<<<<< HEAD
=======

>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
require('babel-polyfill');
require('babel-register');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

require('./src/app.js').start(process.env.PORT);
