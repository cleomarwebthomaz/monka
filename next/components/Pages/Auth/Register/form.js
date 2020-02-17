import { useEffect } from "react";
import { Form, Alert } from "react-bootstrap";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';

import Spinner from '../../../Spinner';

import { setUser } from '../../../../store/actions/auth';
import { post } from '../../../../services/http';

import './styles.scss';

function FormRegister(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.status && props.status.success) {
            dispatch(setUser(props.status.data));

            toast.success(`Seja bem vindo(a) ${props.status.data.user.name}`, {
                position: toast.POSITION.BOTTOM_CENTER
            });

            props.onSuccess();
        }
    }, [props.status]);

    return (
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

            <Form.Group>
                <Form.Label>Senha</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Digite uma senha com mais de 4 caracteres" 
                    value={props.values.password}
                    onChange={e => props.setFieldValue('password', e.target.value)}
                />
                {props.touched.password && props.errors.password && 
                    <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
                }                    
            </Form.Group>

            {props.values.password.length >= 3 &&
                <Form.Group>
                    <Form.Label>Confirme a Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confirme a Senha"
                        value={props.values.confirm_password}
                        onChange={e => props.setFieldValue('confirm_password', e.target.value)}
                    />

                    {props.touched.confirm_password && props.errors.confirm_password && 
                        <Form.Control.Feedback type="invalid">{props.errors.confirm_password}</Form.Control.Feedback>
                    }
                </Form.Group>
            }
        
            <div className="mt-3 mb-5 d-flex justify-content-between">
                <button className="btn btn-light" type="button" onClick={() => props.onCancel(false)}>
                    Fazer Login
                    <i className="fas fa-disk"></i> 
                </button>                    
                <button className="btn btn-primary" type="submit">
                    Cadastre-se
                    <i className="fas fa-disk"></i> 
                    {props.isSubmitting && <Spinner animation="border" role="status" />}
                </button>
            </div>
        </Form>            
    );
}

export default withFormik({
  mapPropsToValues: props => ({ 
      name: 'tetse d eteste',
      email: Math.random() + '@mail.co',
      password: 'cleomar201',
      confirm_password: 'cleomar201',
      person_type: 'individual',
      document: '570.294.160-82',
      phone: '49561561616156'
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
    password: Yup.string()
            .min(4, 'Digite uma senha com mais de 4 caracteres')
            .required('Digite uma senha'),
    confirm_password: Yup.string()
                        .required('Esse campo é obrigatório')
                        .oneOf([Yup.ref('password'), null], 'As senhas não correspondem'),
    document: Yup.string().required('Esse campo é obrigatório')
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
      try {
        setSubmitting(true);
        const result = await post('/auth/register', values);

        if (result.success) {
            setStatus({ success: true, data: result });
        }

        if (result.errorValidation) {
            result.error.map(e => {
                let error = {};
                error[e.field] = e.message;
                setErrors(error);
            });
        }

      } catch(error) {
          console.log(error);
          setErrors({ error: 'Não foi possível realizar seu cadastro. Tente novamente mais tarde.' });
      }
  },

})(FormRegister);
