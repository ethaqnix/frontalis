import { ON_LOGIN } from '../actions/login/login';

const initialState = {
  start: null,
  end: null,
  locations: [],
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case ON_LOGIN:
      return {
        login: true,
      };
    default:
      return state;
  }
}
