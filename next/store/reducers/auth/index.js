import * as authActions from '../../types/auth';

const INITIAL_STATE = {
    user: {},
    isLogged: false,
    token: null,
    loaded: false
};

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
      case authActions.SET_USER:
        return {
          ...state,
          user: action.payload,
          isLogged: true,
          loaded: true
        };

      case authActions.SET_LOADED:
        return {
          ...state,
          loaded: action.payload
        };
        
      case authActions.SET_TOKEN:
        return {
          ...state,
          token: action.payload
        };
        
      case authActions.LOGOUT:
        return INITIAL_STATE;

      default:
        return state;
    }
  };