import { combineReducers } from 'redux';
import login from './login';
import menu from './menu';
import navigation from './navigation';
import search from './search';

const rootReducer = combineReducers({
  login,
  menu,
  navigation,
  search,
});

export default rootReducer;
