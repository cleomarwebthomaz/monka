import { Col, Row, Container } from 'react-bootstrap';

import CustomerSidebar from '../CustomerSidebar';
import Breadcrumb from '../../components/Breadcrumb';
import PageTitle from '../../components/PageTitle';
import Private from '../Private';

export default function(props) {

    return (
        <Private>
            <Container>
                <Breadcrumb />
                <PageTitle title={props.pageTitle} />

                <Row>
                    <Col sm={3}>
                        <CustomerSidebar className="mt-4" />
                    </Col>
                    
                    <Col className="mt-4">
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </Private>
    );

}