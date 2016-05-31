'use strict';
const app = require('./app');

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('#signed-out').hide('slow');
  $('#signed-in').show('slow');
};

const signOutSuccess = (data) => {
  app.user = null;
  $('#signed-in').hide('slow');
  $('#signed-out').show('slow');

};

const changePasswordSuccess = (data) => {
  console.log('User #' + app.user.id + ' has successfully changed password.');
};

const showGameList = (data) => {
  console.log(data);

};

module.exports = {
  failure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  showGameList,
};
