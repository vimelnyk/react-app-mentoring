import { combineReducers } from 'redux';
import filmReducer from './filmReducer';

export default combineReducers({
  films: filmReducer,
});
