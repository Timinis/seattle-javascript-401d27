'use strict';
import express from 'express';
const app = express();
const router = new express.Router();

import Cats from '../constructors/cats.js';

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

let serverError = (res, err) => {
  let error = { error: err };
  res.statusCode = 500;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

router.get('/api/v1/cats', (req, res) => {
  Cats.fetchAll()
    .then(data => sendJSON(res, data))
    .catch(err => serverError(res, err));
});

router.get('/api/v1/cats/:id', (req, res) => {
  if (req.params.id) {
    Cats.findOne(req.params.id)
      .then(data => sendJSON(res, data))
      .catch(err => serverError(res, err));
  }
});

router.post('/api/v1/cats', (req, res) => {
  let record = new Cats(req.body);
  record
    .save()
    .then(data => sendJSON(res, data))
    .catch(console.error);
});

router.delete('/api/v1/cats/:id', (req, res) => {
  if (req.params.id) {
    Cats.deleteOne(req.params.id).then(success => {
      let data = { id: req.params.id, deleted: success };
      sendJSON(res, data);
    });
  }
});

export default router;
