import {combineReducers} from 'redux';
import registerReducer from './reducers';

export const reducer = combineReducers({
  rergisterReducer: registerReducer,
});
