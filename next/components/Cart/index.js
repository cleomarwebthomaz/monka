import React, { useState, useEffect } from 'react';
import { ButtonGroup, ListGroup, Form, Spinner, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import CheckoutComponent from './Checkout';
import Quantity from './Quantity';
import Voucher from './Voucher';
import Details from './components/Details';

import currency from '../../utils/currency';
import { showCart, loadCart } from '../../store/actions/cart';
import { get, patch, httpDelete } from '../../services/http';
import './styles.scss';

function CartComponent() {
    const [addresses, setAddresses] = useState([]);
    const [addressSelected, setAddressSelected] = useState({});

    const route = useRouter();
    const dispatch = useDispatch();
    const { isLogged } = useSelector(state => state.auth);
    const { show, cart, loading } = useSelector(state => state.cart);
    const [openCheckout, setOpenCheckout] = useState(false);

    useEffect(() => {
        async function getAddresses() {
            const result = await get('/myAddress');

            if (result.length <= 0) {
                toast.warning('Adicione um endereço para continuar', { position: toast.POSITION.BOTTOM_CENTER });

                dispatch(showCart(false));
                return route.push('/auth/access/register-address')
            }

            if (!addressSelected || !addressSelected.id) {
                const addressDefault = result.find(item => item.is_default);
                setAddressSelected(addressDefault);
            }

            setAddresses(result);
        } 

        if (isLogged && show) getAddresses();
    }, [isLogged, show]);

    async function deleteItem(cartProduct) {
        await httpDelete(`/cart/${cartProduct.cart_id}/product/${cartProduct.id}`);
        dispatch(loadCart());
    }

    async function setAddress(address) {
        setAddressSelected(address);
        await patch(`/myAddress/set-default/${address.id}`, address);
        dispatch(loadCart());
    }
  
    async function deleteItem(cartProduct) {
      await httpDelete(`/cart/${cart.id}/product/${cartProduct.id}`);
      dispatch(loadCart());
    }    

    if (!show) return <div />;

    return (
        <>
        <div onClick={() => dispatch(showCart(false)) } className="cart-mask"></div>

        <CheckoutComponent
            show={openCheckout && cart.products.length > 0}
            onHide={() => setOpenCheckout()}
            addressSelected={addressSelected}
            addresses={addresses}
            cart={cart}
            cartLoading={loading}
        />
        
        <div id="block-cart" className="shadow animated fadeInRight faster">
            <div className="cart-header p-2 d-flex align-items-center border-bottom shadow justify-content-between">

                <div className="d-flex align-items-center">
                    <h4 className="m-0 mr-1 text-light text-primary">Minha sacola</h4>
                    ({cart.products.length}) produto{cart.products <= 1 ? '' : 's'}
                </div>

                <button className="btn btn-light rounded-circle" onClick={() => dispatch(showCart(false)) }>
                    <i className="fas fa-times"></i>
                </button>
            </div>

            <div className="body p-4 border-bottom">

                {cart.products.length <= 0 && 
                    <div className="text-center"> 
                        <h1>Sua sacola está vazia</h1>
                        <div className="mt-5 empty-icon">
                            <i className="far fa-frown-open"></i>
                        </div>
                    </div>
                }

                {cart.products.map(cartProduct =>
                <div key={cartProduct.id}>
                    <Card className="rounded position-relative mb-4 pt-1 pb-2 item border-0" key={cartProduct.id}>
                        <Row key={cartProduct.id}>
                            <Col xs={4}>
                                <Image src={cartProduct.product.image_url} className="img-fluid" />
                                <div className="d-block d-sm-none">
                                    <Quantity cartProduct={cartProduct} />
                                </div>
                            </Col>

                            <Col xs={8}>
                                <h6 className="text-primary mb-0 mt-3">{cartProduct.product.name}</h6>
                                <strong>{cartProduct.observation}</strong>
                                <Row>
                                    <Col>
                                        <div><b className="group-name text-secondary mb-0">Tamanho</b></div>
                                        {cartProduct.option && <div className="group-value">{cartProduct.option.name}</div>}
                                    </Col>
                                    <Col sm={6} className="pr-5 mt-4 mt-sm-0 d-none d-sm-block">
                                       <Quantity cartProduct={cartProduct} />
                                    </Col>
                                </Row>

                                <Row className="p-0 groups">
                                    {cartProduct.groups.map(group => 
                                        <Col xs={6} key={group.id}>
                                            <ListGroup className="mb-2 list-groups">
                                                <ListGroup.Item className="p-0 m-0 border-0 group-option">
                                                    {group.name}
                                                </ListGroup.Item>

                                                {group.options.map(groupOption => 
                                                    <ListGroup.Item className="p-0 m-0 border-0 group-option-name" key={groupOption.id}>
                                                        - {groupOption.option.name} + 
                                                        <span className="text-muted">{currency(groupOption.option.price)}</span>
                                                    </ListGroup.Item>
                                                )}
                                            </ListGroup>
                                        </Col>
                                    )}
                                </Row>                                
                            </Col>

                            <Button 
                                variant="danger"
                                size="sm"
                                className="rounded-circle btn-trash"
                                onClick={() => {
                                    deleteItem(cartProduct);
                                }}
                            >
                                <i className="fas fa-trash"></i>
                            </Button>
                        </Row>
                    </Card>                  
                </div>
                )}

                {cart.products.length > 0 &&
                <>
                <div className="addresses ml-3 mr-3 mb-4">
                    {addresses.map(address => 
                        <Form.Group key={address.id} controlId={`address-${address.id}`} className="mb-0">
                            <Form.Check 
                                type="radio" 
                                value={address.id}
                                checked={addressSelected && addressSelected.id === address.id}
                                label={`
                                    ${address.street}, ${address.number} - 
                                    ${address.neighborhood.name} 
                                `} 
                                onChange={() => setAddress(address)}
                            />
                        </Form.Group>
                    )}                    
                </div>

                <Voucher />

                <Details cart={cart} loading={loading} />
                </>
                }
            </div>

            <div className="footer w-100 mt-3 d-flex flex-column border-top">
                <ButtonGroup>
                    <div className="btn btn-light btn-lg rounded-0">
                        Total: {currency(cart.total_price)}
                    </div>
                    <button 
                        className="btn btn-success btn-lg rounded-0" 
                        onClick={() => setOpenCheckout(true) }
                        disabled={cart.products.length <= 0 || loading}
                    >
                        Finalizar Pedido  
                        <i className="fas fa-chevron-right"></i> 
                    </button>

                </ButtonGroup>
            </div>
        </div>
        </>
    );
}

export default CartComponent;
