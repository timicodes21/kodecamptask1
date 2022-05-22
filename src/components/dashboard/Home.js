import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import reading from '../../assets/images/reading.png'

const Home = () => {
  return (
    <div className="p-3">
        <Row className="p-1 p-md-5 bg-white shadow-sm roundedd">
            <Col md={6}>
                <p className="font-40 font-500 my-md-4">Welcome <br /> <span className="text-pink">Display name</span></p>
            </Col>
            <Col md={6}>
                <Image src={reading} fluid />
            </Col>  
        </Row>
    </div>
  )
}

export default Home