import * as types from './search';

export const handleSearch = () => ({
  type: types.PRESS_SEARCH,
});

export const changeSearch = newSearch => ({
  type: types.CHANGE_SEARCH,
  newSearch,
});
