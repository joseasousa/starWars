import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as PlanetsActions } from '../ducks/planets';

export function* getPlanets(action) {
  try {
    const response = yield call(api.get, `/planets/?page=${action.page}`);

    yield put(PlanetsActions.getPlanetsSuccess(response.data.results, response.data.count));
  } catch (err) {
    yield put(PlanetsActions.getPlanetsFailure('Erro ao buscar produtos da API.'));
  }
}
