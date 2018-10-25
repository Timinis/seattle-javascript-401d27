'use strict';

const router = require('../lib/router.js');

//library for all the methods

router.get('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let id = req.query.id || '';
  res.write(`ID: ${id}`);
  res.end();
});

router.post('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

router.delete('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let id = req.query.id || '';
  res.write(`ID: ${id} was deleted`);
  res.end();
});

router.put('/api/v1/notes', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

module.exports = {};
