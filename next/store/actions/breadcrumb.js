import * as breadcrumbActions from '../types/breadcrumb';

export const clearCrumbs = function() {
    return async dispatch => {
        dispatch({ type: breadcrumbActions.CRUMB_CLEAR });
    }
}

export const addCrumb = function(name, link, active = false) {
    return async dispatch => {
        dispatch({ type: breadcrumbActions.ADD_CRUMB, payload: { name, link, active } });
    }
}