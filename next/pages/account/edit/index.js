import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { useEffect } from "react";

import Layout from '../../../components/Layouts/Customer';
import Page from "../../../components/Page";

import { patch } from '../../../services/http';
import { setUserData } from "../../../store/actions/auth";

function EditAccount(props) {
    const { user, isLogged } = useSelector(state => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const crumbs = [
        { name: 'Minha Conta' },
    ];
  
    const pageTitle = 'Minha Conta';

    useEffect(() => {
        if (props.status && props.status.success) {
            dispatch(setUserData(props.status.data));

            toast.success('Dados atualizados com sucesso!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            router.push('/account');
        }
    }, [props.status]);

    useEffect(() => {
        props.setFieldValue('id', user.id)
        props.setFieldValue('name', user.name)
        props.setFieldValue('email', user.email)
        props.setFieldValue('phone', user.phone)
        props.setFieldValue('person_type', user.person_type)
        props.setFieldValue('document', user.document)
    }, []);

    return (
        <Page title={pageTitle} crumbs={crumbs}>
            <Layout pageTitle={pageTitle}>

                <Form onSubmit={props.handleSubmit}>

                    {props.errors.error &&
                        <Alert variant="danger">
                            <Form.Control.Feedback type="invalid">{props.errors.error}</Form.Control.Feedback>
                        </Alert>
                    }

                    <Form.Group controlId="formName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={props.values.name}
                            onChange={e => props.setFieldValue('name', e.target.value)}
                            placeholder="Seu nome Completo"
                        />
                        {props.touched.name && props.errors.name && 
                            <Form.Control.Feedback type="invalid">{props.errors.name}</Form.Control.Feedback>
                        }
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={props.values.email}
                            onChange={e => props.setFieldValue('email', e.target.value)}
                            placeholder="E-mail"
                        />
                        {props.touched.email && props.errors.email && 
                            <Form.Control.Feedback type="invalid">{props.errors.email}</Form.Control.Feedback>
                        }
                    </Form.Group>

                    <Form.Group controlId="formPhone">
                        <Form.Label>Celular</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={props.values.phone}
                            onChange={e => props.setFieldValue('phone', e.target.value)}
                            placeholder="Celular"
                        />
                        {props.touched.phone && props.errors.phone && 
                            <Form.Control.Feedback type="invalid">{props.errors.phone}</Form.Control.Feedback>
                        }
                    </Form.Group>

                    <Form.Group controlId="formPersonType">
                        <Form.Label>Tipo de Pessoa</Form.Label>
                        <Form.Control
                            as="select"
                            value={props.values.person_type}
                            onChange={e => props.setFieldValue('person_type', e.target.value)}
                        >
                            <option value="individual">Pessoa Física</option>
                            <option value="legal">Pessoa Jurídica</option>
                        </Form.Control>
                        {props.touched.person_type && props.errors.person_type && 
                            <Form.Control.Feedback type="invalid">{props.errors.person_type}</Form.Control.Feedback>
                        }                  
                    </Form.Group>

                    <Form.Group controlId="formDocument">
                        <Form.Label>{props.values.person_type === 'legal' ? 'CNPJ' : 'CPF'}</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={props.values.document}
                            onChange={e => props.setFieldValue('document', e.target.value)}
                            placeholder={props.values.person_type === 'legal' ? 'CNPJ' : 'CPF'}
                        />
                        {props.touched.document && props.errors.document && 
                            <Form.Control.Feedback type="invalid">{props.errors.document}</Form.Control.Feedback>
                        }
                    </Form.Group>

                    <div className="mt-3 mb-5 d-flex justify-content-end">
                        <button className="btn btn-primary" type="submit">
                            Salvar  
                            <i className="fas fa-disk"></i> 
                            {props.isSubmitting && <Spinner />}
                        </button>
                    </div>
                </Form>

            </Layout>
        </Page>
    );
}

export default withFormik({
    mapPropsToValues: props => {
        console.log( props )
    },

    mapPropsToValues: props => ({ 
        id: '',
        name: '',
        email: '',
        phone: '',
        person_type: '',
        document: ''
    }),

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required('Informe seu nome')
        .test('real', 'Informe seu nome completo.', (value) => {
            if (!value) return;
  
            const count = value.split(' ');
  
            if (!count[1]) {
                return false;
            }
  
            return true;
        }),
      email: Yup.string().email('Informe um e-mail válido')
          .required('Informe seu e-mail'),
      phone: Yup.string().required('Esse campo é obrigatório'),
      document: Yup.string().required('Esse campo é obrigatório')
    }),
  
    handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
        try {
          setSubmitting(true);
          const data = await patch(`/profile/${values.id}`, values);

          if (data.success) {
              setSubmitting(false);
              setStatus({ success: true, data: values });
          }
  
          if (data.validations) {
              data.validations.map(e => {
                  let error = {};
                  error[e.field] = e.message;
                  setErrors(error);
              });
          }
  
        } catch(error) {
          console.log(error)
          setErrors({ error: 'Não foi possível salvar os dados. Tente novamente.' });
        }
    },
  
  })(EditAccount);
  