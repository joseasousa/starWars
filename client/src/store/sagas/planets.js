import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlanetsActions } from '../ducks/planets';

export function* getPlanets() {
  try {
    const response = yield call(api.get, '/planets');

    yield put(PlanetsActions.getPlanetsSuccess(response.data.results));
  } catch (err) {
    yield put(PlanetsActions.getPlanetsFailure('Erro ao buscar produtos da API.'));
  }
}
