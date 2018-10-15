'use strict';

// Require the module under test

const helloModule = require('../../lib/greet.js');

describe('Testing the helloModule', () => {
  it(`should say "hello" + " name" when function is invoked`, () => {
    expect(helloModule.helloWorld('Tim')).toBe('Hello Tim');
  });
  it(`should say null when function is invoked with failing parameters`, () => {
    expect(helloModule.helloWorld()).toBe(null);
  });
  it(`should say null when the parameter is a number`, () => {
    expect(helloModule.helloWorld(12)).toBe(null);
  });
});
