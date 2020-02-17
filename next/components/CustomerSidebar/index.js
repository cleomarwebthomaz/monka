import Link from 'next/link';
import { ListGroup, Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../store/actions/auth';

function LayoutCustomer(props) {
    const dispatch = useDispatch();

    return (
        <>
        <div className="d-block d-sm-none">
            <Navbar bg="light" expand="md">
            <Navbar.Brand href="#home">Menu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/account/edit">
                        <Nav.Link href="/account/edit">
                            <i className="fas fa-edit mr-1"></i> Minha Conta
                        </Nav.Link>
                    </Link>
                    <Link href="/order">
                        <Nav.Link href="/order">
                            <i className="fas fa-shopping-cart mr-1"></i> Minhas Compras
                        </Nav.Link>
                    </Link>
                    <Link href="/vouchers">
                        <Nav.Link href="/vouchers">
                            <i className="fas fa-tag mr-1"></i> Meus Cupons
                        </Nav.Link>
                    </Link>
                    <Link href="/account/addresses">
                        <Nav.Link href="account/addresses">
                            <i className="fas fa-map-marker-alt mr-1"></i> Meus Endereços
                        </Nav.Link>
                    </Link>
                    <Link href="/account/change-password">
                        <Nav.Link href="/account/change-password">
                            <i className="fas fa-lock mr-1"></i> Alterar Senha
                        </Nav.Link>
                    </Link>                                                          
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>

        <ListGroup {...props} className="d-none d-sm-block">
            <Link href="/account/edit">
                <a>
                    <ListGroup.Item className="mb-1 ml-1">
                        <i className="fas fa-edit mr-1"></i> 
                        <span className="name">Minha Conta</span>
                    </ListGroup.Item>
                </a>
            </Link>

            <Link href="/order">
                <a>
                    <ListGroup.Item className="mb-1 ml-1">
                        <i className="fas fa-shopping-cart mr-1"></i> 
                        <span className="name">Minhas Compras</span>
                    </ListGroup.Item>
                </a>
            </Link>

            <Link href="/vouchers">
                <a>
                    <ListGroup.Item className="mb-1 ml-1">
                        <i className="fas fa-tag mr-1"></i> 
                        <span className="name">Meus Cupons</span>
                    </ListGroup.Item>
                </a>
            </Link>

            <Link href="/account/addresses">
                <a>
                    <ListGroup.Item className="mb-1 ml-1">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        <span className="name">Meus Endereços</span>
                    </ListGroup.Item>
                </a>
            </Link>

            <Link href="/account/change-password">
                <a>
                    <ListGroup.Item className="mb-1 ml-1">
                        <i className="fas fa-lock mr-1"></i> 
                        <span className="name">Alterar Senha</span>
                    </ListGroup.Item>
                </a>
            </Link>

            <ListGroup.Item className="cursor-pointer" onClick={() => {
                dispatch(authLogout());
            }}>
                <i className="fas fa-sign-out-alt mr-1"></i> 
                <span className="name">Sair</span>
            </ListGroup.Item>
        </ListGroup>
        </>
    );

}

export default LayoutCustomer;