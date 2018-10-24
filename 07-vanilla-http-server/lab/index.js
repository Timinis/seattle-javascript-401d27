'use strict';
//use dotenv dependency
const dotenv = require('dotenv').config();
//grab app.js which is the server file
const server = require('./src/app.js');

//starting the server
server.start(process.env.PORT, () =>
  console.log(`Server up on ${process.env.PORT}`)
);
