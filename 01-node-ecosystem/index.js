// Put hello in our module

const helloModule = require('./lib/greet.js');

//testing the helloModule to see its data structure
console.log(helloModule);

//storing the result of helloModule methods as variables;

let timHello = helloModule.helloWorld('Tim');

// testing timHello
console.log(timHello);
