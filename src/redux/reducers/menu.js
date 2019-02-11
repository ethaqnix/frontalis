import { PRESS_MENU, CHANGE_PAGE } from '../actions/menu/menu';

const initialState = {
  open: false,
  currentPage: 'Home',
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case PRESS_MENU:
      return {
        open: !state.open,
        ...state,
      };
    case CHANGE_PAGE:
      return {
        currentPage: !state.open,
        open: false,
      };
    default:
      return state;
  }
}
