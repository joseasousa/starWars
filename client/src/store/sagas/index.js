import { all, takeLatest, put } from 'redux-saga/effects';

import { Types as PlanetsTypes } from '../ducks/planets';
import { Types as VehiclesTypes } from '../ducks/vehicles';
import { Types as PeopleTypes } from '../ducks/people';
import { Types as AuthTypes, Creators as AuthCreator } from '../ducks/auth';

import {
  login, auth, createProfile, logout,
} from './auth';
import { getPlanets } from './planets';
import { getVehicles } from './vehicles';
import { getPeople } from './people';

export default function* rootSaga() {
  return yield all([
    takeLatest(PlanetsTypes.GET_REQUEST, getPlanets),
    takeLatest(VehiclesTypes.GET_REQUEST, getVehicles),
    takeLatest(PeopleTypes.GET_REQUEST, getPeople),
    takeLatest(AuthTypes.AUTH_REQUEST, auth),
    takeLatest(AuthTypes.SIGNIN_REQUEST, login),
    takeLatest(AuthTypes.CREATE_PROFILE_REQUEST, createProfile),
    takeLatest(AuthTypes.SIGNOUT_REQUEST, logout),
    put(AuthCreator.authRequest()),
  ]);
}
