import { Container, Image, Row, Col } from 'react-bootstrap';
import Link from 'next/link'

import Logo from './logo.png';

import './styles.scss';

import Menu from './components/Menu';
import StoreStatus from './components/StoreStatus';

export default function(props) {

    return (
        <header id="header" className="pt-2 pb-sm-2 position-fixed w-100">
            <Container>
                <Row>
                    <Col>
                        <Link href="/">
                            <a className="text-dark">
                                <Image src={Logo} className="img-fluid logo" alt="logo" />
                            </a>
                        </Link>
                    </Col>

                    <Col className="storeStatus" xs={6} sm={4}>
                        <StoreStatus {...props} />
                    </Col>

                    <Col xs={12} sm={4}>
                        <Menu />
                    </Col>
                </Row>
            </Container>
        </header>
    );

}