'use strice';

//1st party library
const http = require('http');

//local libraries- it tears a url apart and returns it as a workable object

const parser = require('./lib/parser.js');

const cowsay = require('cowsay');

//use this overarching function to take in request and response
const requestHandler = (req, res) => {
  //use the parser above to parse the request and use
  parser(req)
    .then(req => {
      //checks the method and see if it is get
      if (req.method === 'GET' && req.parsed.pathname === '/') {
        res.setHeader('Content-type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'Accepted';

        //use this to add html to the js
        res.write(
          `<!DOCTYPE html>
            <html>
              <head>
                <title> cowsay </title>  
              </head>
              <body>
              <header>
                <nav>
                  <ul> 
                    <li><a href="/cowsay?text=I am processed vegan food">cowsay</a></li>                    
                  </ul>
                </nav>
              <header>
              <main>
                <!-- project description -->
              </main>
              </body>
            </html>`
        );
        console.log(req);
        res.end();
        return;
      } else if (req.method === 'GET' && req.parsed.pathname === '/cowsay') {
        res.setHeader('Content-type', 'text/html');
        res.statusCode = 200;
        res.statusMessage = 'Accepted';

        //use this to add html to the js
        res.write(
          `<!DOCTYPE html>
            <html>
              <head>
                <title> cowsay </title>  
              </head>
              <body>
                <h1> cowsay </h1>
                <pre>
                  ${cowsay.say({ text: req.query.text })}
                </pre>
              </body>
            </html>`
        );
        console.log(req);
        res.end();
        return;
      } else if (
        req.method === 'POST' &&
        req.parsed.pathname === '/api/cowsay'
      ) {
        res.setHeader('Content-Type', 'text/json');
        res.statusCode = 200;
        res.statusMessage = 'Accepted';
        res.write(JSON.stringify({ content: cowsay.say(req.body) }));
        res.end();
        return;
      }
      //for not found command
      else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Resource Not Found');
        res.end();
      }
    })
    .catch(err => {
      res.writeHead(500);
      res.write(err);
      res.end;
    });
};

//Server Callback

const app = http.createServer(requestHandler);

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: callback => app.close(callback)
};
