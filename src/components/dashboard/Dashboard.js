import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    
  return (
    <Container fluid className="sidebar">
        <Row>
            <Col md={3} className="sidebar-left shadow-sm bg-white">
                <div className="d-flex flex-column my-5">
                    <div className="d-flex justify-content-end me-5">
                        <Link to="home" className='font-24 fw-bold text-blue link'>Dashboard</Link>
                    </div>
                </div>
                <div className="d-flex flex-column my-5">
                    <div className="d-flex justify-content-end me-5">
                        <Link to="courses" className='font-24 fw-bold text-blue'>Courses</Link>
                    </div>
                </div>
                <div className="d-flex flex-column my-5">
                    <div className="d-flex justify-content-end me-5">
                        <Link to="profile" className='font-24 fw-bold text-blue'>Profile</Link>
                    </div>
                </div>
                <div className="d-flex flex-column my-5">
                    <div className="d-flex justify-content-end me-5">
                        <Link to="logout" className='font-24 fw-bold text-blue'>Logout</Link>
                    </div>
                </div>
            </Col>
            <Col md={9} className="sidebar-right bg-light">
                <Outlet />
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard