import * as actionTypes from '../../types/breadcrumb';

const INITIAL_STATE = {
    crumbs: []
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_CRUMB:
            return {...state, crumbs: [...state.crumbs, action.payload]};
        break;


        case actionTypes.CRUMB_CLEAR:
            return {...state, crumbs: []};
        break;

        default:
            return state;
    }
}