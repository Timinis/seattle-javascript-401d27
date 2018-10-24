const parse = require('../src/lib/parser');

describe('Testing the parse function', () => {
  it(`should return parse as a function`, () => {
    expect(typeof parse).toBe('function');
  });
  it('should return false when asked for truthiness', () => {
    expect(parse == true).toBe(false);
  });
});
