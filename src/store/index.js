import { combineReducers, createStore } from 'redux';
import memberReducer from './memberReducer';
import filterReducer from './filterReducer';
import formInputReducer from './formInputReducer';
import loginReducer from './loginReducer';
import authenticationReducer from './authenticationReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  memberReducer: memberReducer,
  filterReducer: filterReducer,
  formInputReducer: formInputReducer,
  loginReducer: loginReducer,
  authenticationReducer: authenticationReducer,
  modalReducer: modalReducer
})

let store = createStore(rootReducer);

export default store;