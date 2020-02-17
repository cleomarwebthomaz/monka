import { useEffect } from 'react';
import { Modal, Button, Form, Alert, Container, Row, Col } from "react-bootstrap";
import Register from './Register';import { useState } from "react";

import Page from '../../../components/Page';
import Login from './login';
import Layouts from "../../../components/Layouts";

import './styles.scss';

export default function Access(props) {
    const [continueRegister, setContinueRegister] = useState(false);
    const [alignTitle, setAlignTitle] = useState('left');

    const defaultTitle = 'Acessar minha Conta';
    const [pageTitle, setPageTitle] = useState(defaultTitle);

    const crumbs = [
        { name: 'Acessar minha Conta' },
    ];

    function onContinueRegister(status) {
        setContinueRegister(status);
    }

    useEffect(() => {
        if (continueRegister) {
            setAlignTitle('center');
            setPageTitle('Preencha o formulário abaixo.');
        } else {
            setAlignTitle('left');
            setPageTitle(defaultTitle);
        }
    }, [continueRegister]);


    return (
        <Page title={pageTitle} crumbs={crumbs}>
            <Layouts pageTitle={pageTitle} alignTitle={alignTitle}>

                <Row className="justify-content-center">
                   {!continueRegister && <Col><Login /></Col>}
                   <Col sm={6}>
                        <Register 
                            onContinueRegister={onContinueRegister} 
                            continueRegister={continueRegister} 
                        />
                   </Col>
                </Row>
            </Layouts>
        </Page>
    );
}
