'use strict';

const parser = require('./parser.js');

const router = (module.exports = {});

//this object holds routing table

router.routes = {};

const methods = ['GET', 'PUT', 'POST', 'DELETE'];

methods.forEach(element => {
  router.routes[element] = {};
  router[element.toLowerCase()] = function(path, callback) {
    router.routes[element][path] = callback;
  };
});

router.route = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  return parser(req)
    .then(req => {
      let handler = router.routes[req.method][req.parsed.pathname];

      if (handler) {
        return handler(req, res);
      }
    })
    .catch(err => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.status = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });
};
