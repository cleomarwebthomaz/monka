import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { Container, Row, Col, Button, ListGroup, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import LoginModal from '../../auth/Modal';
import Page from '../../../components/Page';
import Loading from '../../../components/Loading';
import Breadcrumb from '../../../components/Breadcrumb';
import Carousel from './Carousel';

import ProductGroups from './components/Groups';

import { loadCart } from '../../../store/actions/cart';
import currency from '../../../utils/currency';
import { addCrumb, clearCrumbs } from '../../../store/actions/breadcrumb';
import { get, post } from '../../../services/http';

import './styles.scss';
import PageTitle from '../../../components/PageTitle';

const ProductShow = (props) => {
    const [product, setProduct] = useState(props.product);
    const [quantity, setQuantity] = useState(props.product.quantity || 1);
    const [basePrice, setBasePrice] = useState(props.basePrice);
    const [totalPrice, setTotalPrice] = useState(props.basePrice);
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    const { isLogged } = useSelector(state => state.auth);
    const { setting, loaded } = useSelector(state => state.setting);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(clearCrumbs());
        dispatch(addCrumb('Produtos', '/'));
    }, []);

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

    async function validateProductAddToCart() {
        return new Promise((resolve, reject) => {
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

    async function addCart(force = false) {
        try {
            if (setting.store_status.value !== "1") {
                return;
            }

            if (!isLogged && !force) {
                return setShowLoginModal(true);
            }

            setLoading(true);
            setError({});

            await validateProductAddToCart().then(async e => {
                const productData = {
                    product_id: product.id,
                    quantity
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

                toast.success('Produto adicionado ao carrinho de compras', {
                    position: toast.POSITION.BOTTOM_CENTER
                });

                dispatch(loadCart());

                router.push('/cart');

            }).catch((error) => {
                setError(error);
                setLoading(false);
            });

        } catch (error) {
            console.log( error );
        }
    }

    if (!loaded) return <Loading />;

    return (
        <Page title={product.name}>
            <Container className="mb-5 productShow">
                <Breadcrumb />

                {!isLogged && 
                    <LoginModal 
                        showLogin={showLoginModal} 
                        closeModal={() => setShowLoginModal(false)}
                        onSuccess={() => 
                        addCart(true) } 
                    />
                }

                <Row>
                    <Col xs={6}>
                        <Carousel images={product.images} />

                        <h4 className="mt-5">Descrição</h4>
                        <p>{product.description}</p>
                    </Col>

                    <Col className="pt-4">
                        <PageTitle className="name" title={product.name}>{product.name}</PageTitle>
                        <p>{product.short_description}</p>

                        <h1 className="price">{currency(totalPrice)}</h1>

                        {product.options && <ListGroup className="options mt-4" horizontal>
                            {product.options.map(option =>
                                <ListGroup.Item 
                                    key={option.id} 
                                    active={option.selected}
                                    onClick={() => {
                                        product.options.map(op => op.selected = false);
                                        option.selected = true;
                                        setBasePrice(option.price);
                                        setProduct(() => ({...product, ...product}));
                                    }}
                                >
                                    {option.name}
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                        }

                        <ProductGroups 
                            product={product} 
                            groups={product.groups} 
                            error={error} 
                            onChange={data => {
                                setProduct(() => ({...product, ...data}));
                            }}
                        />
                        
                        <div className="d-flex mt-4">
                            <Button className="btn-quantity left btn-md" onClick={decrementQuantity}>
                                <i className="fas fa-minus-circle"></i>
                            </Button>
                            <div className="quantity btn btn-md bg-light border-sm pl-3 pr-3 rounded-0">
                                {quantity || 1}
                                </div>
                            <Button className="btn-quantity right btn-md" onClick={incrementQuantity}>
                                <i className="fas fa-plus-circle"></i>
                            </Button>

                            {setting.store_status.value === "1" &&
                            <Button className="btn-quantity right btn-md ml-3" disabled={loading} onClick={() => addCart()}>
                                <i className="fas fa-shopping-cart"></i> Comprar

                                {loading &&
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                }

                            </Button>
                            }
                        </div>

                    </Col>

                </Row>
            </Container>
        </Page>
    );
}

ProductShow.getInitialProps = async function({ query }) {
    if (!query.slug) return {
        error: true,
        product: {}
    };

    const product = await get(`/product/${query.slug}`);

    let basePrice = product.price;

    if (product.options) {
        basePrice = product.options[0].price;
        product.options[0].selected = true;
    }
    
    return {
        product,
        basePrice
    };
};
  
export default ProductShow;
