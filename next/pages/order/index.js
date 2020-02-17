import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Table, Spinner, Alert } from 'react-bootstrap';

import Layout from '../../components/Layouts/Customer';

import { get } from '../../services/http';
import currency from '../../utils/currency';
import pusher from '../../services/pusher';
import Page from '../../components/Page';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
      async function getData() {
          const result = await get('/order');
          setOrders(result);
          setLoading(false);
      }

      pusher.bind(`orderStatus-${user.id}`, function(data) {
          getData();
      });
    
      getData();
    }, []);

    const pageTitle = 'Meus Pedidos';

    const crumbs = [
      { name: pageTitle },
    ];

    return (
      <Page title={pageTitle} crumbs={crumbs}>
        <Layout pageTitle={pageTitle}>

            {loading && <Spinner /> }
            {!loading && orders.lenght <= 0 && <Alert>Sem Registros</Alert>}

            {!loading &&
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Status</th>
                    <th>M. Pagamento</th>
                    <th>Produtos</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order =>
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.state.name}</td>
                      <td>{order.paymentMethod.name}</td>
                      <td>{order.cart.__meta__.products_count}</td>
                      <td>{currency(order.total_price)}</td>
                      <td>
                          <Link href={`/order/${order.id}`}>
                            <a className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i> 
                            </a>
                          </Link>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            }

            <div className="mt-5 d-flex justify-content-between">
              <Link href="/">
                <a className="btn btn-light">
                  <i className="fas fa-chevron-left"></i> 
                  Continuar Comprando  
                </a>
              </Link>

              <Link href="/account">
                <a className="btn btn-primary">
                    Minha Conta
                    <i className="fas fa-chevron-right"></i> 
                </a>
              </Link>
            </div>
        </Layout>
      </Page>
    );

}

export default Order;
