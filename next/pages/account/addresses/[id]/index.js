import Layout from '../../../../components/Layouts/Customer';
import Page from '../../../../components/Page';

import Form from '../../../../components/Pages/Addresses/form';

function EditAddress(props) {
    const pageTitle = 'Atualizar Endereço';

    const crumbs = [
        { name: 'Minha Conta', link: '/account' },
        { name: 'Meus Endereços', link: `/account/addresses` },
        { name: pageTitle }
    ];

    return (
        <Page crumbs={crumbs} title={pageTitle}>
            <Layout pageTitle={pageTitle}>
                <Form />
            </Layout>
        </Page>
    );
    
}

export default EditAddress;
