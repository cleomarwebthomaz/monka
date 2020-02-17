import { useRouter } from "next/router";

import Layouts from "../../../components/Layouts";
import Page from "../../../components/Page";
import Form from '../../../components/Pages/Addresses/form';
import Private from "../../../components/Private";

function AccessRegisterAddress(props   ) {
    const route = useRouter();

    const pageTitle = 'Cadastre-se seu endereço';

    const crumbs = [
        { name: 'Cadastro' },
        { name: 'Adicionar Endereço' }
    ]

    function onSuccess() {
        route.push('/');
    }

    return (
        <Private>
            <Page title={pageTitle} crumbs={crumbs}>
                <Layouts pageTitle={pageTitle}>

                    <hr />
                    
                    <Form redirect="/" />
                </Layouts>
            </Page>
        </Private>
    );
}

export default AccessRegisterAddress;
