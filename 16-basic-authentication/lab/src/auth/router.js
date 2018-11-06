'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/api/signup', (req, res, next) => {
  // Create the user
  let newUser = new User(req.body);
  // handle errors
  newUser
    .save()
    .then(newUser => res.send(newUser.generateToken()))
    .catch(next);
  // respond with user's generated token if things go well
});

// note the middleware
authRouter.get('/api/signin', auth, (req, res, next) => {
  res.send(req.token);
});

export default authRouter;
