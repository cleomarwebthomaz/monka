import { Form } from "react-bootstrap";
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from "next/router";

import FormRegister from '../../../components/Pages/Auth/Register/form';

function AccessRegister(props) {
    const route = useRouter();

    function onSuccess() {
        route.push('/auth/access/register-address');
    }

    return (
        <div className={props.continueRegister ? 'mt-0' : 'mt-5'}>

            {!props.continueRegister && 
                <>
                    <h4>Não tem uma conta? Cadastre-se</h4>
                    <hr />
                </>
            }

            {props.continueRegister && 
            <FormRegister 
                onContinueRegister={() => props.onContinueRegister(false)}
                onSuccess={onSuccess}
            />}

            {!props.continueRegister &&
            <Form onSubmit={props.handleSubmit}>
                <Form.Group>
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

                <Form.Group>
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
                
                <div className="mt-3 mb-5 d-flex justify-content-between">
                    <button className="btn btn-primary" type="button" onClick={() => props.onContinueRegister(true)}>
                        Cadastre-se
                        <i className="fas fa-disk"></i> 
                    </button>
                </div>
            </Form>
            }
        </div>
    );
}

export default withFormik({
    mapPropsToValues: props => ({ 
        name: '',
        email: ''
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
    }),
  
    handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
        setStatus({ continue: true });
    },
  
  })(AccessRegister);
  