'use strict';

// Use the export to export it to index.js
module.exports = exports = {};

//Naming the module
exports.myModuleName = `Tim's module for HELLO WORLD`;

//Exporting the module

exports.helloWorld = name => {
  return greetWorld(name);
};
//Create helper function

/* uses string as param return null or string depending on truthiness */
const greetWorld = string => {
  if (string && typeof string === 'string') {
    console.log(`Hello ${string}`);
    return `Hello ${string}`;
  } else {
    console.log(null);
    return null;
  }
};
