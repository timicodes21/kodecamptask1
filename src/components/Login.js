import React from 'react'
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import NavigBar from './NavigBar';
import student from '../assets/images/studentImg.png'
import kodecamp from '../assets/icons/kodecamp.png'
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleSignIn = () => {
        console.log('sign in button')
    }

    const handleLogin = () => {
        console.log('Login button')
        navigate('/dashboard/home')
    }

  return (
      <>
        <NavigBar url="/" page="Home" />
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <div>
                        <span className="font-40 font-500 text-darkblue">Student Login</span><br />
                        <span className="font-24 font-500 text-blue">Make sure your account is secure</span>
                    </div>
                    <div>
                        <Image src={student} fluid />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="text-center">
                        <Image src={kodecamp} fluid />
                    </div>
                    <Form className="my-3">
                        <Form.Group className="mb-4 input-cover">
                            <Form.Control type="email" placeholder="email" className="login-input p-3" />
                            <FaUserAlt className="login-icon" />
                        </Form.Group>
                        <Form.Group className="mb-4 input-cover">
                            <Form.Control type="password" placeholder="password" className="login-input p-3" />
                            <FaLock className="login-icon" />
                        </Form.Group>
                        <button onClick={handleLogin} className='w-100 bg-blue fw-bold login-button shadow mb-4 p-3 text-white'>Login</button>
                        <button onClick={handleSignIn} className='w-100 bg-success fw-bold login-button shadow mb-4 p-3 text-white'>Sign in With Google</button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Login