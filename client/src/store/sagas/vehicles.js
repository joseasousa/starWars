import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as VehiclesActions } from '../ducks/vehicles';

export function* getVehicles() {
  try {
    const response = yield call(api.get, '/vehicles');

    yield put(VehiclesActions.getVehiclesSuccess(response.data.results));
  } catch (err) {
    yield put(VehiclesActions.getVehiclesFailure('Erro ao buscar Vehicles da API.'));
  }
}
