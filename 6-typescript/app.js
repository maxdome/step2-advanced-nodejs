'use strict';

const User = require('./User.js').default;
const UserList = require('./UserList.js').default;

const userList = new UserList()
  .addUser(new User('first'))
  .addUser(new User('second'));

console.log('' + userList);
