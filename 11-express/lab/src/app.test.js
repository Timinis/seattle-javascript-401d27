import request from 'supertest';
const { app } = require('./app.js');

describe('App Tests', () => {
  it('should create a cat profile', done => {
    request(app)
      .post('/api/v1/cats')
      .send({ name: 'bella', weight: 8 })
      .then(response => {
        expect(typeof response.body).toEqual('object');
        done();
      });
    request(app)
      .get('/api/v1/cats')
      .then(response => {
        expect(typeof response.body).toEqual('object');
        done();
      });
    request(app)
      .get('/api/v1/cats/asdbqrebaerasg')
      .then(response => {
        expect(response.body).toEqual({ error: 'asdbqrebaerasg not found' });
        done();
      });
    request(app)
      .post('/api/v1/cats')
      .send()
      .then(response => {
        expect(typeof response.body).toEqual('object');
        done();
      });
  });
});
