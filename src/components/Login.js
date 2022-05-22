import React, { useState } from 'react'
import { Container, Row, Col, Image, Form } from 'react-bootstrap';
import NavigBar from './NavigBar';
import student from '../assets/images/studentImg.png'
import kodecamp from '../assets/icons/kodecamp.png'
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, provider } from '../firebase/config';

const Login = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [load, setLoad] = useState(false)
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        setLoading(true)
        signInWithPopup(auth, provider)
			.then((res) => {
                setLoading(false)
                const { displayName: name, email, photoURL: src, accessToken: token } = res.user;
                const user = { name, email, src, token};
                localStorage.setItem("user", JSON.stringify(user));
                navigate('/dashboard/home');
			})
			.catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setLoad(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            setLoad(false)
            const { displayName: name, email, photoURL: src, accessToken: token } = res.user;
            const user = { name, email, src, token};
            localStorage.setItem("user", JSON.stringify(user));
            navigate('/dashboard/home');
        })
        .catch((error) => {
            setLoad(false)
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
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" required className="login-input p-3" />
                            <FaUserAlt className="login-icon" />
                        </Form.Group>
                        <Form.Group className="mb-4 input-cover"> 
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required className="login-input p-3" />
                            <FaLock className="login-icon" />
                        </Form.Group>
                        <button type='submit' onClick={(e) => handleLogin(e)} className='w-100 bg-blue fw-bold login-button shadow mb-4 p-3 text-white'>{load ? "Logging in..." : "Login"}</button>
                        <button type='submit' onClick={(e) => handleSignIn(e)} className='w-100 bg-success fw-bold login-button shadow mb-4 p-3 text-white'>{loading ? "Signing in..." : "Sign in With Google"}</button>
                    </Form>
                    <div>
                        <p className="font-14 font-500 text-danger text-center">{error}</p> 
                        <p className="font-18 font-500 text-darkblue text-center">Dont have an account? <Link to="/register" className='fw-bold text-pink'>Register</Link></p> 
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Login