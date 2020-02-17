import { SET_SETTING } from '../types/setting';

import { get } from '../../services/http';

export const loadSettings = function() {
  return async dispatch => {
      const data = await get('/setting');
      dispatch({ type: SET_SETTING, payload: data });
  }
}

export const setSettings = function(data) {
  return { type: SET_SETTING, payload: data };
}