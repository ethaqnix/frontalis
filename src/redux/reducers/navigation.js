import { FADE_IN, FADE_OUT } from '../actions/navigation/navigation';

const initialState = {
  fade: false,
};

export default function navigation(state = initialState, action) {
  switch (action.type) {
    case FADE_OUT: {
      return {
        ...state,
        fade: true,
      };
    }
    case FADE_IN: {
      return {
        ...state,
        fade: false,
      };
    }
    default: {
      return state;
    }
  }
}
