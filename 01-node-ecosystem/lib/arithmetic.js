'use strict';

// Use the export to export it to index.js
module.exports = exports = {};

//Naming the module
exports.myModuleName = `Tim's module for Math function`;

//Create helper function

exports.add = (num1, num2) => {
  return addNum(num1, num2);
};
exports.subtract = (num1, num2) => {
  return subNum(num1, num2);
};
/* uses string as param return null or string depending on truthiness */
const addNum = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    console.log(num1 + num2);
    return num1 + num2;
  } else {
    console.log(null);
    return null;
  }
};

const subNum = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    console.log(num1 - num2);
    return num1 - num2;
  } else {
    console.log(null);
    return null;
  }
};
