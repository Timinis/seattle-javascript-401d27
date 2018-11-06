import express from 'express';
import User from './model.js';
import auth from './middleware.js';

const router = express.Router();

router.get('/signin', auth, (request, response) => {
  response.send(request.token);
});

router.post('/signup', async (request, response) => {

  try {

    const user = await User.create(request.body);
    
    const token = user.generateToken();
    
    response.send(token);

  } catch (error) {

    response.sendStatus(400);
  }
});

export default router;