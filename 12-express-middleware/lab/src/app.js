import express from 'express';
// import albumRouter from './routes/albums.js';
import getAllCats from './api/api.js';
const routeError = require('./error/404.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(getAllCats);
app.use(routeError);

// app.use(albumRouter);

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log('Running on', port));
  }
};
