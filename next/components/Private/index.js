import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import cookie from "js-cookie";

import Loading from '../../components/Loading';
import { useEffect } from 'react';

function Private(props) {
    const { isLogged, loaded } = useSelector(state => state.auth);
    const route = useRouter();

    useEffect(() => {
        if (!cookie.get('token')) {
            route.replace('/auth/access');
        }

    }, [isLogged, loaded]);

    if (!isLogged) {
        return (
            <Container>
                <Loading />
            </Container>
        )
    }

    return <div>{props.children}</div>;

}

export default Private;