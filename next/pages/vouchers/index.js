import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Table, Spinner, Alert } from 'react-bootstrap';
import moment from 'moment';

import Layout from '../../components/Layouts/Customer';

import { get } from '../../services/http';
import currency from '../../utils/currency';
import Page from '../../components/Page';
import { classNames } from 'classnames';

const Vouchers = () => {
    const [vouchers, setVouchers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useSelector(state => state.auth);

    useEffect(() => {
      async function getData() {
          const result = await get('/voucher');
          setVouchers(result);
          setLoading(false);
      }
    
      getData();
    }, []);

    const pageTitle = 'Meus Cupons';

    const crumbs = [
      { name: pageTitle },
    ];

    return (
      <Page title={pageTitle} crumbs={crumbs}>
        <Layout pageTitle={pageTitle}>

            {loading && <Spinner /> }
            {!loading && vouchers.length <= 0 && <Alert>Sem Registros</Alert>}

            {!loading &&
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Cupom</th>
                    <th>Valido Até</th>
                    <th>Utilizado</th>
                  </tr>
                </thead>
                <tbody>
                  {vouchers.map(voucher =>
                    <tr key={voucher.id}>
                      <td>{voucher.code}</td>
                      <td>{moment(voucher.date_end).format('DD/MM/YYYY')}</td>
                      <td>
                        <span className={`badge badge-${voucher.used ? 'danger' :  'warning'}`}>
                            {`${voucher.used ? 'Não' :  'Sim'}`}
                        </span>
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

export default Vouchers;
