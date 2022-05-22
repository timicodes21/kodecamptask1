import React from 'react'
import { Row, Col } from 'react-bootstrap';

const Profile = () => {
  return (
    <div className="">
      <div className="p-3">
          <Row className="p-1 bg-white shadow-sm roundedd">
              <Col md={6}>
                  <p className="font-32 font-500 my-md-4 text-darkblue">Profile Settings</p>
                  <p className="font-18 fw-bold text-pink">Display Name</p>
              </Col>
              <Col md={6} className="mb-4">
                  <p className="font-32 text-blue font-500 my-md-4">Branches</p>
              </Col>
          </Row>
      </div>
    </div>
  )
}

export default Profile