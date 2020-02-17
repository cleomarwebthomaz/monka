import { Modal, Button, ListGroup } from 'react-bootstrap';
import currency from '../../../utils/currency';

export default function(props) {

  if (!props.cartProduct.product) return <div/>

  return (
      <Modal show={props.showDetails} onHide={props.closeDetails}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.cartProduct.product.name}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <h6 className="text-primary">Tamanho</h6>
              <p className="text-muted">{props.cartProduct.option && props.cartProduct.option.name}</p>

              {props.cartProduct.groups.map(group => 
                <ListGroup className="mb-2 list-groups" key={group.id}>
                    <ListGroup.Item className="p-0 m-0 border-0 group-option">
                        <h6 className="text-primary">{group.name}</h6>
                    </ListGroup.Item>

                    {group.options.map(groupOption => 
                        <ListGroup.Item className="p-0 m-0 border-0 group-option-name" key={groupOption.id}>
                            - {groupOption.option.name} + 
                            <span className="text-muted">{currency(groupOption.option.price)}</span>
                        </ListGroup.Item>
                    )}
                </ListGroup>
              )}

          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={props.closeDetails}>
              Fechar
            </Button>
          </Modal.Footer>
      </Modal>   
    )

}