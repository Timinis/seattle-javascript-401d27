'use strict';

// Use the export to export it to index.js
module.exports = exports = name => greetWorld(name);

//Exporting the module

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
