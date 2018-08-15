import { combineReducers } from 'redux';

import planets from './planets';
import vehicles from './vehicles';
import people from './people';
import auth from './auth';

export default combineReducers({

  auth,
  planets,
  vehicles,
  people,
});
