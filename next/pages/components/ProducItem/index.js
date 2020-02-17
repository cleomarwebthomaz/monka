import Link from 'next/link';
import { Card } from "react-bootstrap";
import { useState } from 'react';

import currency from '../../../utils/currency';

import ShowDetails from './show';

import './styles.scss';

export default function(props) {
    const { product } = props;
    const [show, setShow] = useState(false);

    if (!product) return <div />;

    return (
        <>
        <ShowDetails
            show={show}
            setShow={setShow}
            product={product}
            {...props}
        />

        <Card className="product-item border-0 shadow mb-5 cursor-pointer" onClick={() => setShow(true)}>
            <Card.Img variant="top" src={product.image_url} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Body className="pl-0 pt-0 pb-0">{product.description}</Card.Body>
            </Card.Body>
            <Card.Footer className="text-right border-0 pt-0">
                <span className="text-success price">
                    {product.options && <span style={{ color: '#cacaca', fontWeight: 400}}>apartir de </span>}
                    {currency(product.price)}
                </span>
            </Card.Footer>
        </Card>
        </>
    );
}
