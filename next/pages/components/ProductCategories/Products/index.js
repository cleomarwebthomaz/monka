import { Row, Col } from 'react-bootstrap';

import ProducItem from '../../ProducItem';

export default function(props) {
    const { products } = props;

    if (!products) return <div />;

    return (
        <Row className="mt-4">
            {products.map(product => 
                <Col key={product.id} sm={6} md={4} lg={3}>
                    <ProducItem product={product} {...props} />
                </Col>
            )}
        </Row>
    );

}