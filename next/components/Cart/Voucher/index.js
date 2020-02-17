import { useEffect } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { ButtonGroup, ListGroup, Form, Spinner, Row, Col, Image, Card, Button, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { get, post, patch, httpDelete } from '../../../services/http';
import { loadCart } from '../../../store/actions/cart';

function VoucherForm(props) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (props.status && props.status.success) {
            dispatch(loadCart());

            toast.success('Cupom aplicado com sucesso', {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }, [props.status]);

    return (
        <Form className="pl-3 pr-3" onSubmit={props.handleSubmit}>

            <Form.Group className="mt-4">
                <InputGroup>
                    <Form.Control 
                        value={props.values.code}
                        onChange={e => props.setFieldValue('code', e.target.value)}
                        placeholder="Cupom"
                        className="border-0 shadow"
                    />
                    <InputGroup.Prepend>
                        <Button variant="primary" type="submit" disabled={props.isSubmitting}>
                            OK
                            {props.isSubmitting && 
                                <Spinner animation="border" role="status" />
                            }
                        </Button>
                    </InputGroup.Prepend>
                </InputGroup>

                {props.touched.code && props.errors.code && 
                    <Form.Control.Feedback type="invalid">{props.errors.code}</Form.Control.Feedback>
                }
            </Form.Group>
        
        </Form>
    )

}

export default withFormik({
  mapPropsToValues: props => ({ 
      code: '',
    }),

  validationSchema: Yup.object().shape({
    code: Yup.string().required('Informe o código do cupom'),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
      try {
        setSubmitting(true);

        const result = await post(`/cart/add-voucher`, values);

        if (result.success) {
            setStatus({ success: true, data: result });
        } else {
            setErrors({ code: result.error });
        }

      } catch(error) {
          setErrors({ error: 'N!ao foi possível válidar o cupom' });
      }
  },

})(VoucherForm);

