import { combineReducers } from 'redux';
import login from './login';
import menu from './menu';
import navigation from './navigation';

const rootReducer = combineReducers({
  login,
  menu,
  navigation,
});

export default rootReducer;
