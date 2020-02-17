import { Button, ListGroup, Alert } from 'react-bootstrap';

import currency from '../../../../utils/currency';

export default function({ groups, product, error, onChange }) {

    function enableAndDisabeGroupOptions(group) {
        const max = group.max;
        const totalCountGroupQuantities = countGroupQuantities(group);

        if (totalCountGroupQuantities >= max) {
            group.options.map(op => op.disabled = false);
            
            group.options.filter(op => {
                if (!op.quantity) op.quantity = 0;
                if (op.quantity <= 0) {
                    return op;
                }
            }).map(op => {
                op.disabled = true;
            });
        } else {
            group.options.map(op => op.disabled = false);
        }
    }

    const countGroupQuantities = (group) => {
        let countQuantities = 0;
        group.options.filter(i => i.quantity > 0).map(option => {
            countQuantities += option.quantity;
        });

        return countQuantities;
    }

    function increment(group, option) {
        if (!option.quantity) option.quantity = 0;

        const max = group.max;
        const currentQuantity = option.quantity;
        let quantity = option.quantity += 1;

        const countQuantities = countGroupQuantities(group);

        if (countQuantities > max) quantity = currentQuantity;

        option.quantity = quantity;
        
        enableAndDisabeGroupOptions(group);
        onChange(product);
    }

    function decrement(group, option) {
        if (!option.quantity) option.quantity = 0;
        option.quantity -= 1;

        if (option.quantity <= 0) {
            option.quantity = 0;
        }

        enableAndDisabeGroupOptions(group);
        onChange(product);
    }

    if (!groups) return <div />;

    return (
        <div className="groups">
            {groups.map(group =>
                <div  key={group.id}>
                    <div className="bg-light title pt-2 pb-2">
                        <strong className="text-uppercase mb-0">{group.name}</strong>
                        <br/>
                        <span>{group.description}</span>
                    </div>
                    
                    {error.group_id === group.id && 
                        <Alert variant="danger">{error.message}</Alert>
                    }

                    <ListGroup className="group-options">
                        {group.options.map(option =>
                            <ListGroup.Item 
                                key={option.id} 
                                active={option.disabled === true}
                                className="d-flex justify-content-between align-items-center"
                                disabled={option.disabled === true}
                            >
                                <div>
                                    {option.name}
                                    <span className="text-muted">+ {currency(option.price)}</span>
                                </div>

                                <div>
                                    <div className="d-flex">
                                        <Button className="btn-quantity left btn-sm" onClick={() => {
                                            decrement(group, option);
                                        }}>
                                            <i className="fas fa-minus-circle"></i>
                                        </Button>
                                        <div className="quantity btn btn-sm bg-light border-sm pl-3 pr-3 rounded-0">
                                            {option.quantity || 0}
                                        </div>
                                        <Button 
                                            className="btn-quantity right btn-sm" 
                                            onClick={() => {
                                                increment(group, option);
                                            }}
                                            disabled={option.disabled === true}
                                        >
                                            <i className="fas fa-plus-circle"></i>
                                        </Button>
                                    </div>
                                </div>
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </div>
            )}
        </div>
    );
    
}