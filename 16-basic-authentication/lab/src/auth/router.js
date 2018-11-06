<<<<<<< HEAD
'use strict';
=======
import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();

router.get('/signin', auth, (request, response) => {
  response.send('where can the token be?');
});

router.post('/signup', async (request, response) => {
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6

  try {

    // create the user with posted info

    // make a token unique to the user
    
    // respond with the token

<<<<<<< HEAD
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
=======
  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;
>>>>>>> e6d3e4af2395879684d301dc28fdf40125475ee6
