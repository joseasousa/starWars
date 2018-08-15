import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as VehiclesActions } from '../ducks/vehicles';

export function* getVehicles(action) {
  try {
    const response = yield call(api.get, `/vehicles/?page=${action.page}`);

    yield put(VehiclesActions.getVehiclesSuccess(response.data.results, response.data.count));
  } catch (err) {
    yield put(VehiclesActions.getVehiclesFailure('Erro ao buscar Vehicles da API.'));
  }
}
