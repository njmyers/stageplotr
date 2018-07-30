import { combineReducers, createStore } from 'redux';

import mapReducer from '../Map/map-reducer';
import kitReducer from '../Kit/kit-reducer';

const rootReducer = combineReducers({
  map: mapReducer,
});

const store = createStore(rootReducer);

export default store;
