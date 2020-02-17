import * as actionTypes from '../../types/cart';

const INITIAL_STATE = {
    loading: true,
    show: false,
    cart: {
        total_price: 0,
        products: [],
        address_shipping: {},
        shipping: 0,
        total_products: 0,
        __meta__: {
            products_count: 0
        }
    }
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.SET_CART:
            return {...state, cart: action.payload, loading: false};
        
        case actionTypes.SET_LOADING:
            return {...state, loading: action.payload};
            
        case actionTypes.SET_SHOW_CART:
            return {...state, show: action.payload};

        case actionTypes.RESET_CART:
            return {
                cart: {
                    total_price: 0,
                    products: [],
                    address_shipping: {},
                    shipping: 0,
                    total_products: 0,
                    __meta__: {
                        products_count: 0
                    }
                }
            };

        default:
            return state;
    }
}