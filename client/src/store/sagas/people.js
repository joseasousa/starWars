import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PeopleActions } from '../ducks/people';

export function* getPeople() {
  try {
    const response = yield call(api.get, '/people');

    yield put(PeopleActions.getPeoplesSuccess(response.data.results));
  } catch (err) {
    yield put(PeopleActions.getPeoplesFailure(`Error ${err}`));
  }
}
