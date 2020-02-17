import * as actionTypes from '../../types/setting';

const INITIAL_STATE = {
    setting: {},
    loaded: false
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SET_SETTING:
            return {...state, setting: action.payload, loaded: true};
        break;

        default:
            return state;
    }
}