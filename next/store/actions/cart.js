import * as cartActions from '../types/cart';

import { get } from '../../services/http';

export const loadCart = function() {
    return async dispatch => {
        dispatch({ type: cartActions.SET_LOADING, payload: true });
        const data = await get('/cart');
        dispatch({ type: cartActions.SET_CART, payload: data });
        dispatch({ type: cartActions.SET_LOADING, payload: false });
    }
}

export const setCart = function(cart) {
    return {
        type: cartActions.SET_CART,
        payload: cart
    }
}

export const setLoading = function(loading = true) {
    return {
        type: cartActions.SET_LOADING,
        payload: loading
    }
}

export const resetCart = function() {
    return {
        type: cartActions.RESET_CART
    } 
}

export const showCart = function(show = true) {
    return {
        type: cartActions.SET_SHOW_CART,
        payload: show
    } 
}
