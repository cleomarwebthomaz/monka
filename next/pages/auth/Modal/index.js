import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useState } from "react";

import FormRegister from '../../../components/Pages/Auth/Register/form';

import { setUser } from '../../../store/actions/auth';
import { post } from '../../../services/http';

import './styles.scss';

function LoginModal(props) {
  const [showRegister, setShowRegister] = useState(false);
    const dispatch = useDispatch();

    if (props.status && props.status.success) {
      props.onSuccess();
      dispatch(setUser(props.status.data));
    }
  
    return (
      <>
        {showRegister && 
          <Modal show={showRegister} onHide={() => setShowRegister(false)} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Cadastre-se</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormRegister 
                  onCancel={() => setShowRegister(false)}
                  onSuccess={() => {
                    props.onSuccess();
                  }}
                />
              </Modal.Body>
          </Modal>
        }

        {!showRegister &&
          <Modal show={props.showLogin} onHide={props.closeModal} size="lg">
            <Form onSubmit={props.handleSubmit}>
              <Modal.Header closeButton>
                <Modal.Title>Acesse sua conta</Modal.Title>
              </Modal.Header>
              <Modal.Body>

                {props.errors.error &&
                  <Alert variant="danger">
                      <Form.Control.Feedback type="invalid">{props.errors.error}</Form.Control.Feedback>
                  </Alert>
                }

                <Form.Group controlId="formBasicEmail">
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
                      placeholder="Senha" 
                      value={props.values.password}
                      onChange={e => props.setFieldValue('password', e.target.value)}
                    />
                    {props.touched.password && props.errors.password && 
                        <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
                    }                  
                </Form.Group>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowRegister(true)}>
                    Cadastre-se
                </Button>
                <Button variant="primary" type="submit" disabled={props.isSubmitting}>
                    Acessar minha Conta

                    {props.isSubmitting && 
                      <Spinner animation="border" role="status">
                          <span className="sr-only">Loading...</span>
                      </Spinner>
                    }
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        }
      </>
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
            setStatus({ success: true, data: result });
            
        } else {
            setErrors({ error: 'E-mail ou senha inválidos' });
        }

      } catch(error) {
          setErrors({ error: 'E-mail ou senha inválidos' });
      }
  },

})(LoginModal);

