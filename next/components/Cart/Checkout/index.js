import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { Form, Modal, Button, ListGroup, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';

import Spinner from '../../../components/Spinner';
import Details from '../components/Details';
import Voucher from '../Voucher';

import { get, post } from '../../../services/http';
import currency from '../../../utils/currency';

function CheckoutComponent(props) {
    const { onHide, show, addresses, addressSelected, cart, cartLoading } = props;

    const [paymentMethods, setPaymentMethods] = useState([]);
    const [credits, setCredits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const router = useRouter();

    useEffect(() => {
        if (addressSelected) {
            data.user_address_id = addressSelected.id;
            setData(() => ({ ...data, ...data }));
        }
    }, [addressSelected]);

    useEffect(() => {
        async function getPaymentMethods() {
            const result = await get('/paymentMethod');
            setPaymentMethods(result);

            if (!data.payment_method_id) {
                data.payment_method_id = result[0].id;
                setData(() => ({ ...data, ...data }));
            }

            setLoading(false);
        } 

        async function getCredits() {
            const result = await get('/credit');
            setCredits(result);
        } 

        getCredits();
        getPaymentMethods();
    }, []);

    async function processCheckout() {
        setError({});
        
        if (data.payment_method_id === 4 && credits.total_value < cart.total_price) {
            return setError({ credit: 'Você não tem créditos suficientes para realizar esse pedido. Escolha outra forma de pagamento.' });
        }

        if (!data.user_address_id) {
            return setError({ user_address_id: 'Selecione um endereço para entrega.' });
        }

        if (!data.payment_method_id) {
            return setError({ payment_method_id: 'Selecione a forma de pagamento.' });
        }
        
        // setLoading(true);

        const result = await post('/checkout', data);

        toast.success('Seu pedido fopi enviado com sucesso!', {
            position: toast.POSITION.BOTTOM_CENTER
        });

        router.push(`/order/${result.id}?credit=${result.credit ? result.credit.id : false}`);
    }

    return (
      <Modal
        size="lg"
        show={show}
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Finalizar Pedido
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <div className="mb-3">
                <h6 className="text-primary">Selecione o endereço de entrega</h6>
                {error.user_address_id && <Alert variant="danger">{error.user_address_id}</Alert>}

                {addresses.map(address => 
                    <Form.Group key={address.id} controlId={`address-${address.id}`}>
                        <Form.Check 
                            type="radio" 
                            value={address.id}
                            checked={data.user_address_id === address.id}
                            label={`
                                ${address.street}, ${address.number} - 
                                ${address.neighborhood.name} 
                            `} 
                            onChange={(e) => {
                                data.user_address_id = parseInt(e.target.value);
                                setError({ ...error, user_address_id: null })
                                setData(() => ({ ...data, ...data }));
                            }}
                        />
                        <hr />
                    </Form.Group>
                )}
            </div>

            {paymentMethods && 
                <div>
                    <h6 className="text-primary">Selecione o método de Pagamento</h6>
                    <ListGroup className="options mt-3" horizontal>
                        {paymentMethods.map(paymentMethod =>
                            <ListGroup.Item 
                                key={paymentMethod.id} 
                                active={data.payment_method_id === paymentMethod.id}
                                onClick={() => {
                                    data.payment_method_id = paymentMethod.id;
                                    setData(() => ({ ...data, ...data }));
                                }}
                            >
                                {paymentMethod.name}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </div>
            }

            {credits.total_value > 0 && 
                <Alert variant="success" className="mt-3 shadow">Você tem {currency(credits.total_value)} disponível</Alert>
            }

            {error.credit && 
                <Alert variant="danger" className="mt-3 shadow">
                    Você não tem créditos suficientes para realizar esse pedido. Escolha outra forma de pagamento.
                </Alert>
            }

            {data.payment_method_id === 4 && credits.total_value < cart.total_price && !error.credit && 
                <Alert variant="danger" className="mt-3 shadow">
                    Você não tem créditos suficientes para realizar esse pedido. Escolha outra forma de pagamento.
                </Alert>
            }
            
            <Form.Group controlId="observation" className="mt-3">
                <Form.Label>Observação</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows="3" 
                    placeholder="Ex: (Troco Para R$ 50,00)"
                    onChange={(e) => {
                    data.observation = e.target.value;
                    setData(() => ({ ...data, ...data }));
                }} />
            </Form.Group>

            <Voucher />

            <Details cart={cart} loading={loading} />

            <div className="btn btn-light btn-lg rounded-0 btn-block">
                {cartLoading ? <Spinner animation="border" /> : 'Total a Pagar: ' + currency(cart.total_price)}
            </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
            <Button variant="secondary" onClick={onHide}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={processCheckout} disabled={loading || cartLoading}>
                Confirmar Pedido
                {loading && <Spinner />}
            </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CheckoutComponent;