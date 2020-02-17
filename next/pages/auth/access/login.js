import Link from 'next/link';
import { Modal, Button, Form, Alert, Container, Row, Col, Spinner } from "react-bootstrap";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { setUser } from '../../../store/actions/auth';
import { post } from '../../../services/http';

import './styles.scss';

function AccessLogin(props) {
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.status && props.status.success) {

            toast.success(`Bem vindo(a) ${props.status.data.user.name}`, {
                position: toast.POSITION.BOTTOM_CENTER
            });

            dispatch(setUser(props.status.data));
            router.push('/');
        }
        
    }, [props.status]);
  
    return (
        <Form onSubmit={props.handleSubmit} className="mt-5">
            <h4>Já tenho uma conta.</h4>
            <hr />

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

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    value={props.values.password}
                    onChange={e => props.setFieldValue('password', e.target.value)}
                />
                {props.touched.password && props.errors.password && 
                    <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
                }                  
            </Form.Group>

            <div className="d-flex justify-content-between">
                <Link href="/auth/forgot-password">
                    <a className="btn btn-secondary">
                        Recuperar Senha
                    </a>
                </Link>
                <Button variant="primary" type="submit">
                    Acessar minha Conta
                    {props.isSubmitting && 
                      <Spinner animation="border" role="status">
                          <span className="sr-only">Loading...</span>
                      </Spinner>
                    }                    
                </Button>
            </div>
        </Form>
    );
}

export default withFormik({
  mapPropsToValues: props => ({ 
      email: '',
      password: ''
    }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Informe um e-mail válido')
        .required('Informe seu e-mail'),
    password: Yup.string()
        .required('Informe sua senha'),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
      try {
        setSubmitting(true);
        const result = await post('/auth/login', values);

        if (result.success) {
            setSubmitting(false);
            setStatus({ success: true, data: result });
        } else {
            setSubmitting(false);
            setErrors({ error: 'E-mail ou senha inválidos' });
        }

      } catch(error) {
          setErrors({ error: 'E-mail ou senha inválidos' });
      }
  },

})(AccessLogin);

