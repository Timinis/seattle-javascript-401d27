'use strict';

const fs = require('fs');

class Bitmap {
  constructor(filePath) {
    this.file = filePath;
  }

  //buffer is a data type that is retrieved from using fs.readfile
  //parse is intended to parse on the type of the file to this object known as Bitmap
  parse(buffer) {
    this.type = buffer.toString('utf-8', 0, 2);
  }

  //this function effectively creates the new file path and a filename for this file
  //call back is the intended function
  transform(callBack) {
    transformDictionary[callBack](this);
    this.newFile = this.file.replace(/\.bmp/, `.${callBack}.bmp`);
  }
}

//an object containing different methods for transformation
const transformDictionary = {
  //to do list- make a greyscale transformation function in the future
  // greyscale: transformGreyScale;
};

const readFileAndTransform = () => {
  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }
    baldy.parse(buffer);

    //callBack still needs to be created refer back to transformDictionary
    baldy.transform(callBack);

    fs.writeFile(baldy.newFile, baldy.buffer, (err, out) => {
      console.log(`BitMap tranformed: ${baldy.newFile}`);
    });
  });
};

const [file, callBack] = process.argv.slice(2);

let baldy = new Bitmap('./assets/baldy.bmp');
readFileAndTransform();
