'use strict';

//First Party Module
const url = require('url');
const queryString = require('querystring');

const parseFunc = req => {
  return new Promise((resolve, reject) => {
    if (!(req || req.url)) {
      reject('Invalid Request Object. Cannot Parse');
    }

    //url method that creates an object by parsing the string
    req.parsed = url.parse(req.url);

    //query string method that creates an object and reassigning as the query property

    req.query = queryString.parse(req.parsed.query);

    //return then request immediately if it is not the methods listed below
    if (!req.method.match(/POST|PUT|PATCH/)) {
      resolve(req);
    }

    let text = '';

    //use on method of node and use the key term data to add the converted buffer to string

    req.on('data', buffer => {
      text += buffer.toString();
    });

    //use on method to look at end and parse the text to body

    req.on('end', () => {
      try {
        req.body = JSON.parse(text);
        resolve(req);
      } catch (err) {
        reject(err);
      }
    });
  });
};

module.exports = parseFunc;
