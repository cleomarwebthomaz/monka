import Link from 'next/link';
import { Modal, Button, Form, Alert, Container, Row, Col, Spinner } from "react-bootstrap";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import Page from '../../../components/Page';
import Layout from '../../../components/Layouts';

import { post } from '../../../services/http';

import './styles.scss';

function ForgotPassword(props) {
    const router = useRouter();
    const dispatch = useDispatch();

    const crumbs = [
        { name: 'Recuperar Senha' },
    ];

    const pageTitle = 'Recuperar Senha';

    useEffect(() => {
        if (props.status && props.status.success) {

            toast.success(`Foi enviado um email com as instruções para você recuperar sua senha.`, {
                position: toast.POSITION.BOTTOM_CENTER
            });

            router.push('/auth/access');
        }
        
    }, [props.status]);
  
    return (
        <Page title={pageTitle} crumbs={crumbs}>
            <Layout pageTitle={pageTitle}>
                
                {props.status && props.status.success &&
                    <Alert variant="success">
                        Foi enviado um email com as instruções para você recuperar sua senha.
                    </Alert>
                }

                <Form onSubmit={props.handleSubmit} className="mt-2">
                    {props.errors.error &&
                        <Alert variant="danger">
                            <Form.Control.Feedback type="invalid">{props.errors.error}</Form.Control.Feedback>
                        </Alert>
                    }

                    <Form.Group controlId="formBasicEmail" className="mt-4">
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

                    <div className="d-flex justify-content-between">
                        <Link href="/auth/access">
                            <a className="btn btn-secondary">
                                Cancelar
                            </a>
                        </Link>
                        <Button variant="primary" type="submit">
                            Recuperar Senha
                            
                            {props.isSubmitting && 
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                            }
                        </Button>
                    </div>
                </Form>
            </Layout>
        </Page>
    );
}

export default withFormik({
  mapPropsToValues: props => ({ 
      email: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Informe um e-mail válido')
        .required('Informe seu e-mail')
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
      try {
        setSubmitting(true);
        const result = await post('/auth/forgotPassword', values);

        if (result.success) {
            setStatus({ success: true, data: result });
        } else {
            setErrors({ error: 'E-mail inválido' });
        }

      } catch(error) {
          setErrors({ error: 'E-mail ou senha inválidos' });
      }
  },

})(ForgotPassword);

