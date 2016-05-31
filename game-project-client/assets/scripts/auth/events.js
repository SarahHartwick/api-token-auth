'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const app = require('./app');
const api = require('./api');
const ui = require('./ui');

const onSignUp = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
  $(event.target).hide();

};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);

};

const onSignOut = (event) => {
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);

};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);

};

const onGames = (event) => {
  event.preventDefault();
  api.showGames()
  .done(ui.showGameList)
  .fail(ui.failure);

};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#view-games').on('submit', onGames);
};

const signInOrOut = () => {
    $(function() {
      if (app.user) {
      $('#signed-out').hide();
    }
    else {
      $('#signed-in').hide();
    }
  }
);
};

module.exports = {
  addHandlers,
  onSignUp,
  onSignOut,
  onChangePassword,
  signInOrOut,
  onGames,
};