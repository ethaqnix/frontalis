import { PRESS_SEARCH, CHANGE_SEARCH } from '../actions/search/search';

const initialState = {
  open: false,
  currentSearch: {
    start: '',
    end: '',
  },
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case PRESS_SEARCH:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_SEARCH:
      return {
        ...state,
        currentSearch: {
          ...state.currentSearch,
          ...action.newSeach,
        },
      };
    default:
      return state;
  }
}
