import { Form, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { withRouter } from 'next/router'

import Spinner from '../../Spinner';
import Loading from '../../Loading';

import { get, patch, post } from '../../../services/http';

function ChangePasswordForm(props) {
    const router = useRouter();
    const [neighborhoods, setNeighborhoods] = useState([]);
    
    useEffect(() => {
        if (props.status && props.status.success) {
            toast.success('Salvo com sucesso!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            router.push(props.redirect ? props.redirect : '/account/addresses');
        }
    }, [props.status])

    useEffect(() => {
        async function getNeighborhoods() {
            const result = await get('/neighborhood');
            const data = result.map(neighborhood => {
                return { label: neighborhood.name, value: neighborhood.id }
            });

            setNeighborhoods(data);
        }
      
        getNeighborhoods();
    }, [props.router]);

    useEffect(() => {
        async function getNeighborhood() {
            if (props.router.query.id && neighborhoods.length > 0) {
                const result = await get(`/myAddress/${props.router.query.id}`);

                const neighborhood = neighborhoods.find(item => item.value === result.neighborhood_id);

                props.setFieldValue('id', result.id);
                props.setFieldValue('street', result.street);
                props.setFieldValue('number', result.number);
                props.setFieldValue('complement', result.complement || '');
                props.setFieldValue('neighborhood_id', neighborhood);
            }
        }

        getNeighborhood();
    }, [neighborhoods]);

    if (neighborhoods.length <= 0) return <Loading />;

    return (
        <Form onSubmit={props.handleSubmit}>
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control value="Cascavel PR" disabled />
                    </Form.Group>                        
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Bairro</Form.Label>
                        <Select
                            options={neighborhoods}
                            placeholder="Selecione o Bairro"
                            value={props.values.neighborhood_id}
                            onChange={value => props.setFieldValue('neighborhood_id', value)}
                        />
                        {props.touched.neighborhood_id && props.errors.neighborhood_id && 
                            <Form.Control.Feedback type="invalid">{props.errors.neighborhood_id}</Form.Control.Feedback>
                        }
                    </Form.Group>                        
                </Col>
            </Row>

            <Row>
                <Col xs={8}>
                    <Form.Group>
                        <Form.Label>Rua</Form.Label>
                        <Form.Control 
                            onChange={e => props.setFieldValue('street', e.target.value)}
                            value={props.values.street}
                        />
                        {props.touched.street && props.errors.street && 
                            <Form.Control.Feedback type="invalid">{props.errors.street}</Form.Control.Feedback>
                        }
                    </Form.Group>                        
                </Col>
                <Col>
                    <Form.Group>
                        <Form.Label>Nº</Form.Label>
                        <Form.Control 
                            type="number"
                            onChange={e => props.setFieldValue('number', e.target.value)}
                            value={props.values.number}
                        />
                        {props.touched.number && props.errors.number && 
                            <Form.Control.Feedback type="invalid">{props.errors.number}</Form.Control.Feedback>
                        }
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group>
                <Form.Label>Complemento</Form.Label>
                <Form.Control 
                    as="textarea"
                    rows="3" 
                    value={props.values.complement}
                    onChange={e => props.setFieldValue('complement', e.target.value)}
                />
                {props.touched.complement && props.errors.complement && 
                    <Form.Control.Feedback type="invalid">{props.errors.complement}</Form.Control.Feedback>
                }                        
            </Form.Group>

            <div className="mt-3 mb-5 d-flex justify-content-end">
                <button className="btn btn-primary" type="submit" disabled={props.isSubmitting}>
                    Salvar  
                    <i className="fas fa-disk"></i> 
                    {props.isSubmitting && <Spinner />}
                </button>
            </div>
        </Form>
    );
    
}

export default withFormik({
    mapPropsToValues: props => ({ 
        id: '', 
        street: '', 
        number: '', 
        neighborhood_id: {}, 
        complement: ''
    }),
  
    validationSchema: Yup.object().shape({
        street: Yup.string().required('Informe uma nova senha'),
        number: Yup.number().required('Informe o número').positive('Digite apenas número').integer('Digite apenas número'),
        neighborhood_id: Yup.object().required('Selecione o bairro'),
    }),
  
    handleSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
        try {
            setSubmitting(true);

            if (!values.neighborhood_id.value) {
                return setErrors({ neighborhood_id:  'Selecione o bairro' });
            }
            
            let result;
            if (values.id) {
                result = await patch(`/myAddress/${values.id}`, {
                    ...values,
                    neighborhood_id: values.neighborhood_id.value
                });
            } else {
                result = await post(`/myAddress`, {
                    ...values,
                    neighborhood_id: values.neighborhood_id.value
                });
            }

            if (result.success) {
                setSubmitting(false);
                setStatus({ success: true });
            }
    
            if (result.validations) {
                result.validations.map(e => {
                    let error = {};
                    error[e.field] = e.message;
                    setErrors(error);
                });
            }
  
        } catch(error) {
            console.log(error)
            setErrors({ error: 'Não foi possível salvar. Tente novamente.' });
        }
    },
  
  })(withRouter(ChangePasswordForm));
  
  