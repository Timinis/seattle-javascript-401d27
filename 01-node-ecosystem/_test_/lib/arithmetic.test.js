'use strict';
const arithmeticModule = require('../../lib/arithmetic.js');

describe('Testing the arithmetic module sum function', () => {
  it(`should say 27 when function is invoked with 12,15`, () => {
    expect(arithmeticModule.add(12, 15)).toBe(27);
  });
  it(`should say null when function is invoked with empty parameters`, () => {
    expect(arithmeticModule.add()).toBe(null);
  });
  it(`should say null when it takes in none number data types`, () => {
    expect(arithmeticModule.add('12', '15')).toBe(null);
  });
});

describe('Testing the arithmetic module subtract function', () => {
  it(`should say -3 when function is invoked, 12,15`, () => {
    expect(arithmeticModule.subtract(12, 15)).toBe(-3);
  });
  it(`should say null when function is invoked with empty parameters`, () => {
    expect(arithmeticModule.subtract()).toBe(null);
  });
  it(`should say null when it takes in none number data types`, () => {
    expect(arithmeticModule.subtract('12', '15')).toBe(null);
  });
});
