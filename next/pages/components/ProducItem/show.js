import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button, Image, ListGroup, Spinner, Form, Alert } from "react-bootstrap";
import { toast } from 'react-toastify';

import Carousel from './Carousel';
import ProductGroups from './Groups';

import LoginModal from '../../auth/Modal';

import currency from "../../../utils/currency";
import { post } from "../../../services/http";
import { loadCart, showCart } from "../../../store/actions/cart";

export default function(props) {
    const {show, setShow, setting } = props;
    const [product, setProduct] = useState(props.product);
    const [quantity, setQuantity] = useState(props.product.quantity || 1);
    const [basePrice, setBasePrice] = useState(props.product.price);
    const [totalPrice, setTotalPrice] = useState(props.product.price);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [observation, setObservation] = useState('');

    const dispatch = useDispatch();
    const { isLogged } = useSelector(state => state.auth);

    useEffect(() => {
        if (product.options) {
            const selected = product.options.find(item => item.selected);

            if (!selected && product.options.length > 0) {
                product.options[0].selected = true;
                setBasePrice(product.options[0].price);
            }
        }

    }, []);

    function updateProductPrices(base) {
        let total = 0;
        
        if (base) {
            setBasePrice(base);
        } else {
            base = basePrice;
        }

        if (product.groups.length > 0) {
            for (let i in product.groups) {
                const group = product.groups[i];
                for (let key in group.options) {
                    const option = group.options[key];
                    if (option.quantity > 0) {
                        const totalOptionPrice = option.price * option.quantity;
                        total = total += totalOptionPrice;
                    }
                }
            }
        }

        const totalPrice = (base + total) * quantity ;
        
        setTotalPrice(totalPrice);
    }

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        updateProductPrices();
    }, [quantity, basePrice, product]);

    function incrementQuantity() {
        let newQuantity = quantity;
        newQuantity = newQuantity += 1;
        setQuantity(newQuantity);
    }
    
    function decrementQuantity() {
        let newQuantity = quantity;
        newQuantity = newQuantity -= 1;
        if (newQuantity <= 0) newQuantity = 1;
        setQuantity(newQuantity);
    }

    async function addCart(force = false) {
        try {
            if (setting.store_status.value !== "1") {
                return;
            }

            if (!isLogged && !force) {
                setShow(false);
                return setShowLoginModal(true);
            }

            setLoading(true);
            setError({});

            await validateProductAddToCart().then(async e => {
                const productData = {
                    product_id: product.id,
                    quantity,
                    observation
                };

                productData.product_option_id = product.options.find(item => item.selected).id;

                const listOptions = [];
                product.groups.map(group => {
                    const hasOptions = group.options.filter(op => op.quantity > 0).length;

                    if (hasOptions > 0) {
                        group.options.filter(option => option.quantity > 0).map(option => {
                            listOptions.push({
                                product_group_option_id: option.id,
                                product_group_id: option.product_group_id,
                                quantity: option.quantity
                            });
                        });

                        return productData.options
                    }
                });

                productData.options = listOptions;

                await post('/cart', productData);

                toast.success('Produto adicionado ao carrinho de compras', { position: toast.POSITION.BOTTOM_CENTER });

                dispatch(loadCart());
                dispatch(showCart(true));

                setShow(false);
                setLoading(false);

            }).catch((error) => {
                setError(error);
                setLoading(false);
                console.log(error);
            });

        } catch (error) {
            console.log( error );
        }
    }

    async function validateProductAddToCart() {
        return new Promise((resolve, reject) => {

            const product_option = product.options.find(item => item.selected);

            if (!product_option) {
                return reject({ option_id: 'Selecione uma opção' });
            }

            if (product.groups && product.groups.length > 0) {
                product.groups.map(group => {
                    if (group.options && group.options.length > 0) {

                        let countSelects = 0;
                        group.options.filter(item => item.quantity > 0).map(op => {
                            countSelects = countSelects += op.quantity;
                        });

                        if (countSelects < group.min) {
                            return reject({ group_id: group.id, title: group.name,  message: group.rules });
                        }
                    }
                })
            }

            resolve(true);
        });
    }

    return (
        <>
        {!isLogged &&
            <LoginModal 
                showLogin={showLoginModal} 
                closeModal={() => {
                    setShowLoginModal(false);
                    setShow(true);
                }}
                onSuccess={() => {
                    setShow(true);
                    addCart(true);
                }}
            />
        }

       <Modal show={show} onHide={handleClose} animation={true} size="md" className="modal-product-show" centered>
        <Modal.Header closeButton className="border-0">
            <h3>{product.name}</h3>
        </Modal.Header>

        <Modal.Body className="modal-body-show">
            <Carousel images={product.images} imageDefault={product.image_url} />

            <p>{product.description}</p>

            {product.options && 
            <>
                {error.option_id && <Alert variant="danger">{error.option_id}</Alert>}

                <ListGroup className="options mt-4 mb-4" horizontal>
                    {product.options.map(option => 
                        <ListGroup.Item 
                            key={option.id} 
                            active={option.selected}
                            onClick={() => {
                                product.options.map(op => op.selected = false);
                                option.selected = true;
                                setBasePrice(option.price);
                            }}
                        >
                            {option.name}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </>
            }
            
            <ProductGroups 
                product={product} 
                groups={product.groups} 
                error={error} 
                onChange={data => {
                    setProduct(() => ({...product, ...data}));
                }}
            />

            <Form.Group className="mt-3">
                <Form.Label>Observação</Form.Label>
                <Form.Control
                    as="textarea" 
                    rows="2"
                    onChange={e => setObservation(e.target.value)}
                    defaultValue={observation}
                />
            </Form.Group>

        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-between align-items-center pt-0 pb-0 bg-success">
            <h5 className="price text-white pt-1">{currency(totalPrice)}</h5>

            <div className="d-flex">
                {isLogged &&
                <>
                    <Button className="btn-quantity border-0 left btn-sm" onClick={decrementQuantity}>
                        <i className="fas fa-minus-circle"></i>
                    </Button>
                    <div className="quantity btn btn-sm border-sm pl-3 pr-3 rounded-0 text-white">
                        {quantity || 1}
                    </div>
                    <Button className="btn-quantity border-0 right btn-sm" onClick={incrementQuantity}>
                        <i className="fas fa-plus-circle"></i>
                    </Button>
                </>
                }

                {setting.store_status.value === "1" &&
                    <Button className="btn-quantity right btn-md ml-3 border-0 text-uppercase" disabled={loading} onClick={() => {
                        addCart();
                     }}>
                        
                        <i className="fas fa-shopping-cart"></i> Pedir

                        {loading &&
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        }
                    </Button>
                }
            </div>
        </Modal.Footer>
      </Modal>   

      </>     
    );
    
}
  
