'use strict';

// Use the export to export the module as an object to index.js
module.exports = exports = {};

//Naming the module with myModuleName property
exports.myModuleName = `Tim's module for Math function`;

//attaching methods with helper functions totally optional

exports.add = (num1, num2) => {
  return addNum(num1, num2);
};
exports.subtract = (num1, num2) => {
  return subNum(num1, num2);
};

//Create helper function for clean code
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
