import React, { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import reading from '../../assets/images/reading.png'

const Home = () => {
  const [displayName, setDisplayName] = useState('User')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const altName = user.email.split("@")
    setDisplayName(user.name || altName[0]);
  }, [])

  return (
    <div className="p-3">
        <Row className="p-1 p-md-5 bg-white shadow-sm roundedd">
            <Col md={6}>
                <p className="font-40 font-500 my-md-4">Welcome <br /> <span className="text-pink">{displayName}</span></p>
            </Col>
            <Col md={6}>
                <Image src={reading} fluid />
            </Col>  
        </Row>
    </div>
  )
}

export default Home