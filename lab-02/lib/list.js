'use strict';

//creating constructor function
class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length++;
    return this.length;
  }

  map(callback) {
    let newList = new List();
    for (let i = 0; i < this.length; i++) {
      newList.push(callback(this[i]));
    }
    return newList;
  }

  pop() {
    delete this[this.length];
    this.length--;
    return this.length;
  }

  filter(callback) {
    let newList = new List();
    let result;
    for (let i = 0; i < this.length; i++) {
      result = callback(this[i]);
      if (result) {
        newList.push(this[i]);
      }
    }
    return newList;
  }

  slice(startingPoint, endPoint) {
    let newList = new List();
    if (endPoint == undefined) {
      for (let i = startingPoint; i < this.length; i++) {
        newList.push(this[i]);
      }
    }
    if (typeof endPoint == 'number') {
      for (let i = startingPoint; i < endPoint; i++) {
        newList.push(this[i]);
      }
    }
    return newList;
  }

  reduce(callback, initVal) {
    let startPoint;
    let accumulatedVal;
    if (initVal == undefined) {
      startPoint = 1;
      initVal = this[0];
      accumulatedVal = initVal;
      console.log(initVal);
    } else {
      startPoint = 0;
      accumulatedVal = initVal;
    }
    for (let i = startPoint; i < this.length; i++) {
      console.log(accumulatedVal);
      accumulatedVal = callback(accumulatedVal, this[i]);
    }
    return accumulatedVal;
  }
}
//exporting List out
module.exports = List;
