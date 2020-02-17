import { ListGroup, Spinner } from 'react-bootstrap';

import currency from '../../../../utils/currency';

export default (props) => {
    const { loading, cart } = props;

    return (
        <ListGroup className="shadow ml-3 mr-3 mb-4 border-0">
            <ListGroup.Item className="d-flex justify-content-between">
                <div>
                    Total de Items 
                </div>
                <div>
                    {loading ? <Spinner animation="border" /> : currency(cart.total_products)}
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
                <div>
                    Desconto
                </div>
                <div>
                    {loading && <Spinner animation="border" />}
                    <span className="text-throughs"> - {!loading && currency(cart.discount)} </span>
                </div>
            </ListGroup.Item>                    
            <ListGroup.Item className="d-flex justify-content-between">
                <div>
                    Taxa de Entrega 
                </div>
                <div>
                    {loading ? <Spinner animation="border" /> : cart.shipping ? currency(cart.shipping) : 'Grátis' }
                </div>
            </ListGroup.Item>
        </ListGroup>        
    )
    
}