'use strict';

// Require the module under test

const helloModule = require('../../lib/greet.js');

describe('Testing the helloModule', () => {
  it(`should say "hello" + " string" when function is invoked`, () => {
    expect(helloModule('world')).toBe('Hello world');
  });
  it(`should say null when function is invoked with failing parameters`, () => {
    expect(helloModule()).toBe(null);
  });
  it(`should say null when the parameter is a number`, () => {
    expect(helloModule(12)).toBe(null);
  });
});

//added some hotfixes
