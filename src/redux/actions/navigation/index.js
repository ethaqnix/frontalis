import * as types from './navigation';

export const fadeIn = async (dispatch, time = 1000) => new Promise((res) => {
  dispatch({
    type: types.FADE_IN,
  });
  setTimeout(() => {
    res();
  }, time);
});


export const fadeOut = async (dispatch, time = 1000) => new Promise((res) => {
  dispatch({
    type: types.FADE_OUT,
  });
  setTimeout(() => {
    res();
  }, time);
});
