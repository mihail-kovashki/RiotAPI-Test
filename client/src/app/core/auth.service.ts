import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  saveUser (user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  getUser () {
    return JSON.parse(window.localStorage.getItem('user')) || {};
  }

  removeUser () {
    window.localStorage.removeItem('user');
  }

  authenticateUser (token) {
    window.localStorage.setItem('token', token);
  }
  isUserAuthenticated () {
    return window.localStorage.getItem('token') !== null;
  }
  deauthenticateUser () {
    window.localStorage.removeItem('token');
  }
  getToken () {
    return window.localStorage.getItem('token');
  }
  isUserAdmin () {
    if (window.localStorage.getItem('user')) {
      return JSON.parse(window.localStorage.getItem('user')).roles.indexOf('Admin') >= 0;
    }
    return false;
  }
}
