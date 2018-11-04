'use strict';
import express from 'express';
const app = express();
const router = new express.Router();
const serverError = require('../error/error.js');

import Cats from '../constructors/cats.js';
import Shelters from '../constructors/shelter.js';

const models = {
  cats: Cats,
  shelters: Shelters
};

let sendJSON = (res, data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(data));
  res.end();
};

router.get('/api/v1/:model', (req, res, next) => {
  const model = models[req.params.model];
  if (!model) {
    serverError('model not found', req, res, next);
    return;
  }
  model
    .find({})
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.get('/api/v1/:model/:id', (req, res, next) => {
  const model = models[req.params.model];
  model
    .findOne({ _id: req.params.id })
    .then(data => sendJSON(res, data))
    .catch(next);
});

router.post('/api/v1/:model', (req, res, next) => {
  const model = models[req.params.model];
  let record = new model(req.body);
  record
    .save()
    .then(data => sendJSON(res, data))
    .catch(next);
});

// router.delete('/api/v1/cats/:id', (req, res) => {
//   if (req.params.id) {
//     Cats.deleteOne(req.params.id).then(success => {
//       let data = { id: req.params.id, deleted: success };
//       sendJSON(res, data);
//     });
//   }
// });

export default router;
