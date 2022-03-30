import { combineReducers, createStore } from 'redux';
import memberReducer from './memberReducer';
import filterReducer from './filterReducer';
import formInputReducer from './formInputReducer';
import loginReducer from './loginReducer';
import authenticationReducer from './authenticationReducer';

const rootReducer = combineReducers({
  memberReducer: memberReducer,
  filterReducer: filterReducer,
  formInputReducer: formInputReducer,
  loginReducer: loginReducer,
  authenticationReducer: authenticationReducer
})

let store = createStore(rootReducer);

export default store;