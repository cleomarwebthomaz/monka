import { Col, Row, Container } from 'react-bootstrap';

import Breadcrumb from '../../components/Breadcrumb';
import PageTitle from '../../components/PageTitle';

export default function(props) {

    return (
        <Container>
            <Breadcrumb />
            <PageTitle title={props.pageTitle} position={props.alignTitle || 'left'} />
            {props.children}
        </Container>
    );

}