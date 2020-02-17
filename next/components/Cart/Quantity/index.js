import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import currency from '../../../utils/currency';
import { loadCart } from '../../../store/actions/cart';
import { patch } from '../../../services/http';

export default function({ cartProduct }) {
    const dispatch = useDispatch();

    const { show, cart, loading } = useSelector(state => state.cart);

    async function incrementQuantity(cartProduct) {
        cartProduct.quantity += 1;
        await patch(`/cart/${cart.id}/product/${cartProduct.id}`, { quantity: cartProduct.quantity });
        dispatch(loadCart());
    }
  
    async function decrementQuantity(cartProduct) {
        cartProduct.quantity -= 1;
  
        if (cartProduct.quantity <= 0) {
          cartProduct.quantity = 1;
        }
  
        await patch(`/cart/${cart.id}/product/${cartProduct.id}`, { quantity: cartProduct.quantity });
        dispatch(loadCart());
    }

    if (!cartProduct) return <div/>;

    return (
        <div className="p-2 bg-light d-flex flex-column text-center block-quantity">
            <div>
                <Button className="btn-quantity border-0 left btn-sm rounded-circle" onClick={() => {
                    decrementQuantity(cartProduct);
                }}>
                    <i className="fas fa-minus-circle"></i>
                </Button>
                <div className="quantity btn btn-sm border-sm pl-3 pr-3 rounded-0 text-dark">
                    {cartProduct.quantity || 1}
                </div>
                <Button className="btn-quantity border-0 right btn-sm rounded-circle" onClick={() => {
                    incrementQuantity(cartProduct);
                }}>
                    <i className="fas fa-plus-circle"></i>
                </Button>                                        
            </div>

            <div className="total_price text-success mt-1">
                <b>{currency(cartProduct.total_price)}</b>
            </div>
        </div>        
    );

}