import * as types from './login';

export const onLogin = () => {
  console.log('onLogin');
  return ({
    type: types.ON_LOGIN,
  });
};
