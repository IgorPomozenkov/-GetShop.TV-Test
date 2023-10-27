/* eslint-disable no-console */

const token = window.localStorage.getItem('AUTH_KEY') || '';

export default class API {
  baseUrl = 'https://test.ru/api';
  token = token;
  reauthTries = 0;

  getConfig() {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
}
