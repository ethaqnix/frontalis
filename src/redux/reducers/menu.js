import { PRESS_MENU } from '../actions/menu/menu';

const initialState = {
  open: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case PRESS_MENU:
      return {
        login: !state.open,
      };
    default:
      return state;
  }
}
