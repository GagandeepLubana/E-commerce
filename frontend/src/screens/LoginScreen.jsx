import {useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormContainer from '../components/FormContainer';
import {Form, Button, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import Loader from '../components/Loader';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }


    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' className="my-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
            <Button type='submit' variant='primary' className='mt-2'>
                Sign In
            </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link to='/register'>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}


export default LoginScreen