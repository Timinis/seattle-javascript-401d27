// Put hello in our module

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

//testing the helloModule to see its data structure

console.log(arithmetic);
//storing the result of helloModule methods as variables;

let timHello = greet('Tim');
let arithmeticAdd = arithmetic.add(12, 15);
let arithmeticSubtract = arithmetic.subtract(9001, 1);

// testing timHello
