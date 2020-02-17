import nextCookie from 'next-cookies';
import cookie from "js-cookie";

import * as cartActions from '../types/cart';
import * as authActions from '../types/auth';

export const authLogout = function() {
    return async dispatch => {
        const token = cookie.remove('token');
        const user = cookie.remove('user');
        dispatch({ type: authActions.LOGOUT });
        dispatch({ type: cartActions.RESET_CART });
    }
}

export const loginStorage = function() {
    return async dispatch => {

        const token = cookie.get('token');
        const user = cookie.get('user');

        if (user && token) {
            dispatch({ type: authActions.SET_USER, payload: JSON.parse(user) });
            dispatch({ type: authActions.SET_TOKEN, payload: token });
        }

        dispatch({ type: authActions.SET_LOADED, payload: true });
    }
}

export const setUser = function(data) {
    return async dispatch => {
        if (data.token) {
            cookie.set('token', data.token);
        }

        cookie.set('user', JSON.stringify(data.user));

        dispatch({ type: authActions.SET_USER, payload: data.user });
        dispatch({ type: authActions.SET_LOADED, payload: true });
    }
}

export const setUserData = function(data) {
    return async dispatch => {
        cookie.set('user', JSON.stringify(data));
        dispatch({ type: authActions.SET_USER, payload: data });
    }
}

export const setToken = function(token) {
    return async dispatch => {
        cookie.set('token', token);
        dispatch({ type: authActions.SET_TOKEN, payload: token });
    }
}

export const logout = () => {
    return async dispatch => {
        cookie.remove('token');
        cookie.remove('user');
        dispatch({type: authActions.LOGOUT});
    }
}