import React, { useState } from 'react'
import { Container, Row, Col, Offcanvas } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'

const Dashboard = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <Container fluid className="sidebar">
        <div className="d-md-none">
            <div className="d-flex justify-content-end p-3">
                <GiHamburgerMenu className="menu-icon" onClick={handleShow} />
            </div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Kodecamp</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div onClick={handleClose} className="d-flex flex-column my-5">
                        <div className="d-flex justify-content-end me-5">
                            <Link to="home" className='font-24 fw-bold text-blue link'>Dashboard</Link>
                        </div>
                    </div>
                    <div onClick={handleClose} className="d-flex flex-column my-5">
                        <div className="d-flex justify-content-end me-5">
                            <Link to="courses" className='font-24 fw-bold text-blue'>Courses</Link>
                        </div>
                    </div>
                    <div onClick={handleClose} className="d-flex flex-column my-5">
                        <div className="d-flex justify-content-end me-5">
                            <Link to="profile" className='font-24 fw-bold text-blue'>Profile</Link>
                        </div>
                    </div>
                    <div onClick={handleClose} className="d-flex flex-column my-5">
                        <div className="d-flex justify-content-end me-5">
                            <Link to="logout" className='font-24 fw-bold text-blue'>Logout</Link>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
        <Row>
            <Col md={3} className="d-none d-md-block sidebar-left shadow-sm bg-white">
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