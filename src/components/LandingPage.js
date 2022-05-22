import React from 'react'
import NavigBar from './NavigBar'
import { Container, Row, Col, Image } from 'react-bootstrap';
import student from '../assets/images/student.jpg'

const LandingPage = () => {
  return (
    <>
      <NavigBar url="/login" page="Login" />
      <Container className='my-3'>
        <Row className="my-3">
          <Col md={5}>
            <div className='ps-md-5 pt-md-5 d-flex flex-column justify-content-center'>
              <p className="font-40 font-700"><span className="text-primary">Learn</span> on your class <span className='text-primary'>schedule</span></p>
              <p className="font-14 text-ash my-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </Col>
          <Col md={7}>
            <div className="my-4">
              <Image src={student} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LandingPage