import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Table, Card, ListGroup, Alert, Button } from 'react-bootstrap';
import { withRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import PageTitle from '../../../components/PageTitle';
import Spinner from '../../../components/Spinner';
import Breadcrumb from '../../../components/Breadcrumb';

import ProductDetails from '../../../components/Pages/Order/productDetails';

import currency from '../../../utils/currency';
import { get, patch } from '../../../services/http';
import { addCrumb, clearCrumbs } from '../../../store/actions/breadcrumb';

function OrderDetails(props) {
  const [order, setOrder] = useState({});
  const [orderViewSelected, setOrderViewSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingCancelable, setLoadingCancelable] = useState(false);
  const [credit, setCredit] = useState(true);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCrumbs());
    dispatch(addCrumb('Meus Pedidos', '/order'));
    dispatch(addCrumb('Detalhes'));
  }, []);


  async function getOrder(id) {
      setLoading(true);
      const data = await get(`/order/${id}`);
      setOrder(data);
      setLoading(false);
  }
  
  useEffect(() => {
      if (props.router.query.id) {
          getOrder(props.router.query.id);
      }

  }, [props.router.query.id]);

  useEffect(() => {
    async function getCredit() {
      if (props.router.query.credit) {
          const credit = await get(`/credit/${props.router.query.credit}`);
          setCredit(credit);
      }
    }

    getCredit();
  }, [props.router.query]);

  async function onCancel() {
    try {
      setLoadingCancelable(true);

      await patch(`/order/cancel/${order.id}`);
      toast.success('Pedido cancelado com sucesso!', { position: toast.POSITION.BOTTOM_CENTER });

      await getOrder(order.id);

    } catch (error) {
      toast.error(error.message, { position: toast.POSITION.BOTTOM_CENTER });
    }
  }

  return (
    <>
      <ProductDetails 
        showDetails={orderViewSelected.id > 0}
        cartProduct={orderViewSelected}
        closeDetails={() => setOrderViewSelected({})}
      />

      <Container>
          <Breadcrumb />

          <PageTitle 
              title={loading ? 'Pedido' : `Pedido #${order.id}`} 
              className="d-flex justify-content-between align-items-center"
          >
            <div>
              <Link href="/order">
                  <a className="btn btn-sm btn-primary">
                    <i className="fas fa-chevron-left"></i> Voltar
                  </a>
              </Link>
            </div>
          </PageTitle>

          {loading && <Spinner /> }

          {credit && credit.id && <Alert variant="success" className="mt-3">Parabéns você ganhou {currency(credit.value)}</Alert>}

          {!loading &&
          <>
            <Card className="mb-4 mt-4">
              <Card.Header>Detalhes do Pedido</Card.Header>
              <Card.Body>
                <Alert style={{ background: order.state.color, color: '#fff' }}>
                    {order.state.name}
                    {order.state.pending && <Spinner />}
                </Alert>
                <ListGroup>
                    <ListGroup.Item><strong>Total de produtos Total:</strong> {currency(order.total_products)}</ListGroup.Item>
                    <ListGroup.Item><strong>Desconto:</strong> {currency(order.discount)}</ListGroup.Item>
                    <ListGroup.Item><strong>Frete:</strong> {order.shipping ? currency(order.shipping) : 'Grátis'}</ListGroup.Item>
                    <ListGroup.Item><strong>Valor Total:</strong> {currency(order.total_price)}</ListGroup.Item>
                    <ListGroup.Item><strong>Quantidade de Produtos:</strong> ({order.cart.__meta__.products_count})</ListGroup.Item>
                    <ListGroup.Item><strong>Método de Pagamento:</strong> {order.paymentMethod.name}</ListGroup.Item>
                    <ListGroup.Item><strong>Data da Compra:</strong> {order.created_at}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Produtos</Card.Header>
              <Card.Body>
                
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {order.cart.products.map(cartProduct => 
                    <tr key={cartProduct.id}>
                      <td>
                        {cartProduct.product.name}
                        <span className="text-muted">{cartProduct.option && cartProduct.option.name}</span>
                      </td>
                      <td>{currency(cartProduct.price_unity)}</td>
                      <td>{cartProduct.quantity}</td>
                      <td>{currency(cartProduct.total_price)}</td>
                      <td>
                        <Button
                          size="sm"  
                          onClick={() => setOrderViewSelected(cartProduct)}
                        >
                          <i className="fas fa-eye"></i> 
                        </Button>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

              </Card.Body>
            </Card>

            <div className="mt-5 mb-5 d-flex justify-content-between">
                <Link href="/">
                  <a className="btn btn-light">
                    <i className="fas fa-chevron-left"></i> 
                    Continuar Comprando  
                  </a>
                </Link>

                {order.state.cancelable === 1 &&
                  <button className="btn btn-danger" onClick={onCancel} disabled={loadingCancelable}>
                      <i className="fas fa-times mr-1"></i> 
                      {!loadingCancelable ? 'Cancelar Pedido' : 'Cancelando'}
                      {loadingCancelable && <Spinner />}
                  </button>
                }

                <Link href="/account">
                  <a className="btn btn-primary">
                    Ir para minha Conta
                    <i className="fas fa-chevron-right"></i> 
                  </a>
                </Link>
              </div>

            </>
          }

      </Container>  
    </>
  );

}

export default withRouter(OrderDetails);