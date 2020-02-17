import { useSelector } from "react-redux";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import Loading from '../../components/Loading';
import Layout from '../../components/Layouts/Customer';
import Page from "../../components/Page";
import { useEffect } from "react";

function Edit() {
    const { user, isLogged } = useSelector(state => state.auth);
    const router = useRouter();

    const crumbs = [
        { name: 'Minha Conta' },
    ];
  
    const pageTitle = 'Minha Conta';

    useEffect(() => {
        router.push('/account/edit');
    }, []);

    return (<div />);
}

export default Edit;