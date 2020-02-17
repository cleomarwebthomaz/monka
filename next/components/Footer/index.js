import Link from 'next/link';
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

export default function(props) {
    let [setting, seSetting] = useState(props.setting);
    const settings = useSelector(state => state.setting);

    useEffect(() => {
        if (settings.loaded) {
            seSetting(settings.setting);
        }
    }, [settings]);

    return (
        <footer className="bg-light pt-5 pb-5" id="footer">
            <Container>

                <Row>
                    <Col className="item">
                        <h6 className="text-primary text-uppercase">Contatos</h6>
                        {setting.company_mobile_phone.value} <br/>
                        {setting.company_phone.value} <br/>
                        {setting.company_email.value}
                    </Col>
                    <Col className="item">
                        <h6 className="text-primary text-uppercase">{setting.company_address.name}</h6>
                        {setting.company_address.value}
                    </Col>
                    <Col className="item">
                        <h6 className="text-primary text-uppercase">{setting.office_hours.name}</h6>
                        {setting.office_hours.value}
                    </Col>
                    <Col className="item social">
                        <h6 className="text-primary text-uppercase">NAS REDES</h6>
                        <Link href={setting.link_whatsapp.value} prefetch={false}>
                            <a target="_blank">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </Link>
                        <Link href={setting.facebook.value} prefetch={false}>
                            <a target="_blank">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </Link>
                        <Link href={setting.instagram.value} prefetch={false}>
                            <a target="_blank">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </Link>
                    </Col>
                </Row>

                <Row className="mt-1 mt-sm-5">
                    <Col lg={3}>
                        <Link href="/page/politica-de-privacidade"><a>Política de privacidade</a></Link>
                    </Col>
                    <Col lg={3}>
                        <Link href="/page/termos-e-condicoes"><a>Termos e condições</a></Link>
                    </Col>
                    <Col>
                        &copy; Copyright 2019 - Monka Alimentação Saudável
                    </Col>
                </Row>

            </Container>
        </footer>
    );

}