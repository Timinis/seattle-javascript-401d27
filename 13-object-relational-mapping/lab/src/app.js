import express from 'express';
// import albumRouter from './routes/albums.js';
import getAllCats from './api/api.js';
import cors from 'cors';

const routeError = require('./error/404.js');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getAllCats);
app.use(routeError);

// app.use(albumRouter);

let server = false;

module.exports = {
  app,
  start: port => {
    if (!server) {
      server = app.listen(port, err => {
        if (err) {
          throw err;
        }
        console.log(`Server up on ${port}`);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    server.close(() => {
      console.log('Server has been stopped');
    });
  }
};
