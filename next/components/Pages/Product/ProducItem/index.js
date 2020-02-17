import Link from 'next/link';
import { Card } from "react-bootstrap";

import currency from '../../../utils/currency';

import './styles.scss';

export default function({ product }) {

    if (!product) return <div />;

    return (
        <Link href={`/products/${product.slug}`}>
            <a>
            <Card className="product-item border-0 shadow mb-5">
                <Card.Img variant="top" src={product.image_url} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Body className="pl-0 pt-0 pb-0">{product.description}</Card.Body>
                </Card.Body>
                <Card.Footer className="text-right border-0 pt-0">
                    <span className="text-success price">{currency(product.price)}</span>
                </Card.Footer>
            </Card>
            </a>
        </Link>
    );

}