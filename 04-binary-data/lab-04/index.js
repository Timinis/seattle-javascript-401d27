'use strict';

const fs = require('fs');

class Bitmap {
  constructor(filePath) {
    this.path = filePath;
  }

  //buffer is a data type that is retrieved from using the fs.readFile()
  //parse() is intended to parse on the type of the file
  parse(buffer) {
    this.type = buffer.toString('utf-8', 0, 2);
    this.buffer = buffer;
  }

  //transform creates a new file path
  transform(callback) {
    transformDictionary[callback](this);
    this.newFile = this.path.replace(/\.bmp/, `.${callback}.bmp`);
  }
}

const transformGreyscale = bmp => {
  for (let i = 122; i < 1146; i += 4) {
    let avg = (bmp.buffer[i] + bmp.buffer[i + 1] + bmp.buffer[i + 2]) / 3;
    bmp.buffer[i] = avg;
    bmp.buffer[i + 1] = avg;
    bmp.buffer[i + 2] = avg;
  }
};

//an object containing different methods for transformation
const transformDictionary = {
  //TODO: Make a greyscale transformation function in the future
  greyscale: transformGreyscale
};

function readFileAndTransform() {
  fs.readFile(file, (err, buffer) => {
    if (err) throw err;

    baldy.parse(buffer);
    console.log(buffer);
    //callback still needs to be created, refer back to transformDictionary
    baldy.transform(callback);

    fs.writeFile(baldy.newFile, baldy.buffer, (err, out) => {
      if (err) throw err;
    });
  });
}

const [file, callback] = process.argv.slice(2);

let baldy = new Bitmap(file);

readFileAndTransform();
