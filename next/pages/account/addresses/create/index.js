import Layout from '../../../../components/Layouts/Customer';
import Form from '../../../../components/Pages/Addresses/form';
import Page from '../../../../components/Page';

function CreateAddress(props) {
    const pageTitle = 'Cadastrar Endereço';

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

export default CreateAddress;
