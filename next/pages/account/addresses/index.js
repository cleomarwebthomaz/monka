import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Table, Spinner, Alert } from 'react-bootstrap';

import Layout from '../../../components/Layouts/Customer';

import { get } from '../../../services/http';
import Page from '../../../components/Page';

const MyAddresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function getData() {
          const result = await get('/myAddress');
          setAddresses(result);
          setLoading(false);
      }
 
      getData();
    }, []);

    const pageTitle = 'Meus Endereços';

    const crumbs = [
      { name: 'Minha Conta', link: '/account' },
      { name: pageTitle },
    ];

    return (
      <Page title={pageTitle} crumbs={crumbs}>
        <Layout pageTitle={pageTitle}>

            {loading && <Spinner /> }
            {!loading && addresses.lenght <= 0 && <Alert>Sem Registros</Alert>}

            <div className="pt-4 pb-4 text-right">
              <Link href="/account/addresses/create">
                <a className="btn btn-sm btn-primary">
                  Cadastrar Endereço
                </a>
              </Link>
            </div>

            {!loading &&
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Cidade</th>
                    <th>UF</th>
                    <th>Rua</th>
                    <th>Número</th>
                    <th>Bairro</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {addresses.map(address =>
                    <tr key={address.id}>
                      <td>{address.city.name}</td>
                      <td>{address.city.state.name}</td>
                      <td>{address.number}</td>
                      <td>{address.street}</td>
                      <td>{address.neighborhood.name}</td>
                      <td>
                          <Link href={`/account/addresses/${address.id}`}>
                            <a className="btn btn-primary btn-sm">
                                <i className="fas fa-edit"></i> 
                            </a>
                          </Link>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            }
        </Layout>
      </Page>
    );

}

export default MyAddresses;
