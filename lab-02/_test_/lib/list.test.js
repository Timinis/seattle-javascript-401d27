'use strict';

const List = require('../../lib/list.js');

describe('Testing the List class', () => {
  it('starting list should have a length of zero', () => {
    let initList = new List();
    expect(initList.length).toBe(0);
  });

  it('should add a new element to the List', () => {
    let pushList = new List();
    pushList.push('12');
    pushList.push(8);
    pushList.push([]);
    pushList.push(7);
    expect(pushList.length).toBe(4);
  });

  it('should iterate over the array and run the callback for each element', () => {
    let mapList = new List();
    mapList.push(23);
    mapList.push(9);
    mapList.push(12);
    mapList.push(15);

    let actual = mapList.map(num => num * 2);
    expect(actual.length).toEqual(mapList.length);
    expect(actual).not.toEqual(mapList);
  });

  it('should remove the last element from the list', () => {
    let popList = new List();
    popList.push(23);
    popList.push(9);
    popList.push(12);
    popList.push(15);
    popList.pop();
    expect(popList.length).toBe(3);
  });

  it('should evaluate the truthy boolean of the callback and return a new object with those elements that returned true', () => {
    let filterList = new List();
    filterList.push(23);
    filterList.push(9);
    filterList.push(12);
    filterList.push(15);
    let resultList = filterList.filter(el => el > 13);
    expect(resultList).toEqual({ '0': 23, '1': 15, length: 2 });
  });

  it('should slice with the starting and endpoint', () => {
    let sliceList = new List();
    sliceList.push(23);
    sliceList.push(9);
    sliceList.push(12);
    sliceList.push(15);
    let resultList = sliceList.slice(1, 3);

    expect(resultList).toEqual({ '0': 9, '1': 12, length: 2 });
  });

  it('should reduce with the callback and return the final accumulated item', () => {
    let reduceList = new List();
    reduceList.push(23);
    reduceList.push(9);
    reduceList.push(12);
    reduceList.push(15);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let resultList = reduceList.reduce(reducer);

    expect(resultList).toEqual(59);
  });
});
