import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PeopleActions } from '../ducks/people';

export function* getPeople(action) {
  try {
    const response = yield call(api.get, `/people/?page=${action.page}`);


    yield put(PeopleActions.getPeoplesSuccess(response.data.results, response.data.count));
  } catch (err) {
    yield put(PeopleActions.getPeoplesFailure(`Error ${err}`));
  }
}
