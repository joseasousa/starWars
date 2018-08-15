import { put } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import api from '../../services/auth';
import { Creators as ActionCreator } from '../ducks/auth';

export function* login(action) {
  let token = localStorage.getItem('token');

  const userLogin = yield api.post('/login', {
    email: action.payload.email,
    passwd: action.payload.passwd,
  });

  if (userLogin.data.token) {
    token = userLogin.data.token;
    localStorage.setItem('token', token);

    const user = jwtDecode(token);
    localStorage.setItem('user', user);

    yield put(ActionCreator.signinSuccess(user));
  } else {
    yield put(ActionCreator.signinFailure(userLogin.data.message));
  }
}

export function* logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  yield put(ActionCreator.signoutSuccess());
}

export function* auth() {
  const token = localStorage.getItem('token');

  if (token) {
    const user = jwtDecode(token);
    try {
      yield put(ActionCreator.authSuccess(user));
    } catch (err) {
      yield put(ActionCreator.authFailure(`invalid token: ${err}`));
    }
  } else {
    yield put(ActionCreator.authFailure('erro'));
  }
}

export function* createProfile(action) {
  const userToSave = {
    ...action.payload,
  };
  const user = yield api.post('/', userToSave);

  if (user && user.data && user.data.error) {
    yield put(ActionCreator.createProfileFailure(user.data.message));
  } else {
    yield put(ActionCreator.createProfileSuccess(user));
  }
}
