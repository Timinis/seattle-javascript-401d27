const reader = require('../../lib/reader.js');

describe('Testing the List class', () => {

describe('Single Reader Module', () => {
  it('should get hola as contents of single file', (done) => {

    const jobDone = (err, contents) => {
      expect(contents).toBe('hola');
      done();
    };

    reader('./hi.txt', jobDone);
  });
});