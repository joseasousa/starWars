import configureStore from './configureStore';
import sagas from './sagas';
import store from './ducks';

export default () => configureStore(store, sagas);
