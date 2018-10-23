'use strict';

//require UUID to generate random ID
const uuid = require('uuid/v4');

//create constructor USER with UUID as the random id
class User {
  constructor(socket) {
    let id = uuid();
    this.id = id;
    this.nickname = `swagger_${id}`;
    this.socket = socket;
  }
}

module.exports = User;
