import fetch from 'isomorphic-unfetch';
import cookie from "js-cookie";

import { url as baseUrl } from '../config';

export function get(url, params = {}) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(baseUrl + url, {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get('token')}`
                },
            });

            const data = await res.json();

            resolve(data);
        } catch (error) {
            reject(error.message);
            console.log(error);
        }
    });
}

export function post(url, values) {
    return new Promise(async (resolve) => {

        const token = cookie.get('token');

        const res = await fetch(baseUrl + url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token || ''}`
            },
            body: JSON.stringify(values)
        });

        const data = await res.json();

        resolve(data);
    });
}

export function patch(url, values) {
    return new Promise(async (resolve) => {

        const res = await fetch(baseUrl + url, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${cookie.get('token')}`
            },
            body: JSON.stringify(values)
        });

        const data = await res.json();

        resolve(data);
    });
}

export function httpDelete(url) {
    return new Promise(async (resolve) => {

        const res = await fetch(baseUrl + url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${cookie.get('token')}`
            },
        });

        const data = await res.json();

        resolve(data);
    });
}
