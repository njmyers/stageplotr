import { combineReducers } from 'redux';

import mapReducer from '../Map/map-reducer';

const rootReducer = combineReducers({
  map: mapReducer,
});

export default rootReducer;
