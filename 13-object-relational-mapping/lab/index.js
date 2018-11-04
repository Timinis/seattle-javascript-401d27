require('dotenv').config();
require('babel-register');

const mongoose = require('mongoose');
// Connection URL
const url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server

mongoose.connect(url);

require('./src/app.js').start(process.env.PORT);
