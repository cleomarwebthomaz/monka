import Link from 'next/link';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { withRouter } from 'next/router';

import Layout from '../../../../components/Layouts';
import Page from '../../../../components/Page';

import { post } from '../../../../services/http';

function ChangePasswordForm(props) {
    const router = useRouter();
    
    useEffect(() => {
       const token = props.router.query.token;
       props.setFieldValue('token', token);
    }, [])

    useEffect(() => {
        if (props.status && props.status.success) {
            toast.success('Sua senha alterada com sucesso. Faça o login!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            router.push('/auth/access');
        }
    }, [props.status])

    const crumbs = [
        { name: 'Alterar Senha' }
    ];
  
    const pageTitle = 'Alterar minha Senha';

    return (
        <Page crumbs={crumbs} title={pageTitle}>
            <Layout pageTitle={pageTitle}>
                <Form onSubmit={props.handleSubmit}>

                    {props.errors.error &&
                        <Alert variant="danger">
                            <Form.Control.Feedback type="invalid">{props.errors.error}</Form.Control.Feedback>
                        </Alert>
                    }

                    <Form.Group>
                        <Form.Label>Nova Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Nova Senha" 
                            onChange={e => props.setFieldValue('password', e.target.value)}
                            value={props.values.password}
                        />
                        {props.touched.password && props.errors.password && 
                            <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
                        }                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirme a nova Senha</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="confirm_password"
                            placeholder="Confirme a nova Senha" 
                            onChange={e => props.setFieldValue('confirm_password', e.target.value)}
                            value={props.values.confirm_password}
                        />
                        {props.touched.confirm_password && props.errors.confirm_password && 
                            <Form.Control.Feedback type="invalid">{props.errors.confirm_password}</Form.Control.Feedback>
                        }                        
                    </Form.Group>

                    <div className="mt-3 mb-5 d-flex justify-content-between">
                        <Link href="/auth/forgot-password">
                            <a className="btn btn-secondary">
                                Solicitar novo token
                            </a>
                        </Link>

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
    mapPropsToValues: props => ({ 
        password: '', 
        confirm_password: '',
        token: ''
    }),
  
    validationSchema: Yup.object().shape({
        password: Yup.string()
            .required('Informe uma nova senha')
            .min(5, 'A senha deve ter no mínimo 5 caracteres'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
    }),
  
    handleSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
        try {
          setSubmitting(true);
          const data = await post(`/auth/recoverPassword`, values);

          if (data.success) {
              setSubmitting(false);
              setStatus({ success: true });
          }

          if (data.error) {
              setErrors({ error: data.error });
          }

          if (!data) {
            setErrors({ error: 'Token inválido. Solicite um novo token.' });
          }
  
        } catch(error) {
            setErrors({ error: 'Não foi possível alterar a senha. Tente novamente.' });
        }
    },
  
  })(withRouter(ChangePasswordForm));
  
  