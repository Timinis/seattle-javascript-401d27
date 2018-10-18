'use strict';

const fs = require('fs');

let file = ['../data/eenie.txt', '../data/meenie.txt', '../data/moe.txt'];

let timer = 0;
//2nd back this goes in useForEachCallBack to read through each element and run the callback on it which is async CallBack

// 1st step use a for overall to activate forEach
const useForEachCallBack = intendedArray => {
  forRecursion(-1, timer, intendedArray);
};

const forRecursion = (itterater, timer, intendedArray) => {
  if (itterater < intendedArray.length) {
    timer += 500;
    itterater++;
    if (itterater === intendedArray.length) {
      return console.log('Holy recursion');
    }
    setTimeout(() => {
      console.log(itterater);
      fs.readFile(intendedArray[itterater], readFileHelper);

      return forRecursion(itterater, timer, intendedArray);
    }, timer);
  }
};

let readFileHelper = (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
};

useForEachCallBack(file);

module.exports(useForEachCallBack);
