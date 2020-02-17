import { Form, Button, Spinner } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

import Layout from '../../../components/Layouts/Customer';
import Page from '../../../components/Page';

import { patch } from '../../../services/http';
import { useEffect } from 'react';

function ChangePasswordForm(props) {
    const router = useRouter();
    
    useEffect(() => {
        if (props.status && props.status.success) {
            toast.success('Senha alterada com sucesso!', {
                position: toast.POSITION.BOTTOM_CENTER
            });

            router.push('/account');
        }
    }, [props.status])

    const crumbs = [
        { name: 'Minha Conta', link: '/account' },
        { name: 'Alterar Senha' }
    ];
  
    const pageTitle = 'Alterar minha Senha';

    return (
        <Page crumbs={crumbs} title={pageTitle}>
            <Layout pageTitle={pageTitle}>

                <Form onSubmit={props.handleSubmit}>
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
    mapPropsToValues: props => ({ 
        password: '', 
        confirm_password: '' 
    }),
  
    validationSchema: Yup.object().shape({
        password: Yup.string()
            .required('Informe uma nova senha')
            .min(5, 'A senha deve ter no mínimo 5 caracteres'),
        confirm_password: Yup.string()
            .oneOf([Yup.ref('password'), null], 'As senhas não correspondem')
    }),
  
    handleSubmit: async (values, { setSubmitting, setErrors, props, setStatus }) => {
        try {
          setSubmitting(true);
          const data = await patch(`/profile/changePassword`, values);

          if (data.success) {
              setSubmitting(false);
              setStatus({ success: true });
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
            setErrors({ error: 'Não foi possível alterar a senha. Tente novamente.' });
        }
    },
  
  })(ChangePasswordForm);
  
  