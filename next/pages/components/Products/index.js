import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ProducItem from '../ProducItem';

import api from '../../../services/api';

export default function() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { data } = await api.get(`/product`);

            console.log( data );
        }

        fetchData();
    }, []);

    return (
        <Container>
            <Row>
                {products.map(product => 
                    <Col key={product.id} xs={3}>
                        <ProducItem product={product} />
                    </Col>
                )}
            </Row>
        </Container>
    );

}