'use strict';

// use first party dependencies from node
const net = require('net');
const EE = require('events');

//internal files to retrieve constructor from;

const User = require('./model/client.js');

//environment
require('dotenv').config();
const PORT = process.env.PORT || 3000;

//make a new server by using net dependency method

const server = net.createServer();

//make an EE object to use the listeners;

const ee = new EE();

//setting up user pool

const userPool = [];

//setting up an connection event

server.on('connection', socket => {
  const user = new User(socket);
  userPool.push(user);
  user.socket.write(`Welcome to Tim's Swagger Chat room!\n`);

  //use this to test out the message inputted
  socket.on('data', data => {
    //@all, which will send a message to everyone in the chat room
    const command = data
      .toString()
      .split(' ')
      .shift()
      .trim();
    // console.log(command);
    if (command.startsWith('@dm')) {
      const targetUser = data
        .toString()
        .split(' ')
        .splice(1, 1)
        .join(' ');
      const restOfCommand = data
        .toString()
        .split(' ')
        .splice(2)
        .join(' ');
      ee.emit(command, targetUser, user, restOfCommand);
      return;
    }
    if (command.startsWith('@')) {
      const restOfCommand = data
        .toString()
        .split(' ')
        .splice(1)
        .join(' ');
      ee.emit(command, user, restOfCommand);
      return;
    }

    // default behavior
    ee.emit('default', user);
  });
});

// the message that is being sent so we know what the command can do
ee.on('@all', (user, message) => {
  userPool.forEach(element => {
    element.socket.write(`${user.nickname}: ${message}`);
  });
});

ee.on('@nickname', (user, string) => {
  user.nickname = string;
  user.socket.write(`Your swagger has been changed to ${string}`);
});

ee.on('default', user => {
  user.socket.write('Please begin all commands with @\n');
});

ee.on('@list', user => {
  user.socket.write('the users are:\n');
  userPool.forEach(element => {
    user.socket.write(`${element.nickname}`);
  });
});

ee.on('@quit', user => {
  user.socket.write('thanks for visiting the swag channgel');
  userPool.forEach((element, index) => {
    if (element.nickname === `${user.nickname}\r\n`) {
      element.splice(index, 1);
    }
    element.socket.write(`${user.nickname}: has left the channel`);
  });
});

ee.on('@dm', (targetUser, user, string) => {
  console.log(targetUser, 'this is the target user');
  userPool.forEach(element => {
    if (element.nickname === `${targetUser}\r\n`) {
      element.socket.write(`${user.nickname}: ${string}`);
    }
  });
});

//make sure server is listening
server.listen(PORT, () => console.log(`Listening on ${PORT}`));
