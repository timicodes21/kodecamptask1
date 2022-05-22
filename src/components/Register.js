import React, { useState } from 'react'
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import NavigBar from './NavigBar';
import student from '../assets/images/exams.png'
import kodecamp from '../assets/icons/kodecamp.png'
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io'
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault()
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setLoading(false)
                navigate('/login');
            })
            .catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

  return (
      <>
        <NavigBar url="/" page="Home" />
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <div>
                        <span className="font-40 font-500 text-darkblue">Student SignUp</span><br />
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
                    <Form onSubmit={(e) => handleSignup(e)} className="my-3">
                        <Form.Group className="mb-4 input-cover">
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" required className="login-input p-3" />
                            <FaUserAlt className="login-icon" />
                        </Form.Group>
                        <Form.Group className="mb-4 input-cover">
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required className="login-input p-3" />
                            <IoMdMail className="login-icon" />
                        </Form.Group>
                        <Form.Group className="mb-4 input-cover"> 
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required className="login-input p-3" />
                            <FaLock className="login-icon" />
                        </Form.Group>
                        <button type='submit' className='w-100 bg-blue fw-bold login-button shadow mb-4 p-3 text-white'>{loading ? 'Creating account...' : "Register" }</button>
                    </Form>
                    <div>
                        <p className="font-14 font-500 text-danger text-center">{error}</p> 
                        <p className="font-18 font-500 text-darkblue text-center">Already have an account? <Link to="/login" className='fw-bold text-pink'>Login</Link></p> 
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Register