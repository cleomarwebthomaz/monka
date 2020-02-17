import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { loadCart, showCart } from '../../../../store/actions/cart';
import currency from '../../../../utils/currency';

import './styles.scss';

function Cart() {
    const { cart } = useSelector(state => state.cart);
    const { isLogged } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogged) {
            dispatch(loadCart());
        }
    }, [isLogged]);

    return (
        <div className="cart pl-3 pr-3 pt-1 pb-1 cursor-pointer"
            onClick={() => {
                dispatch(showCart(true));
            }}
        >
            <div className="prices">
                <i className="fas fa-shopping-cart"></i>
                <span> {currency(cart.total_price) || 0} </span>
            </div>
            <div className="name">
                SACOLA
            </div>
        </div>
    );

}

export default Cart;
