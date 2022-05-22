import React, { useState, useEffect } from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import profile from '../../assets/images/profile.png'

const Profile = () => {
  const [displayName, setDisplayName] = useState('User')
  const [email,setEmail] = useState('email')
  const [src, setSrc] = useState(profile)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const altName = user.email.split("@")
    setDisplayName(user.name || altName[0]);
    setEmail(user.email)
    user.src ? setSrc(user.src) : setSrc(profile);
    console.log(user.src)
  }, [])

  return (
    <div className="">
      <div className="p-3">
          <Row className="p-1 bg-white shadow-sm roundedd">
              <Col md={6}>
                <p className="font-32 font-500 my-md-4 text-darkblue">Profile Settings</p>
                <p className="font-14 fw-bold text-darkblue">Name</p>
                <p className="font-18 fw-bold text-pink">{displayName}</p>
              </Col>
              <Col md={6} className="my-md-5">
                <div className="mb-5">
                  <Image src={src} fluid />
                </div>
                <p className="font-14 fw-bold text-darkblue">Email</p>
                <p className="font-20 text-blue font-500 mb-md-4">{email}</p>
              </Col>
          </Row>
      </div>
    </div>
  )
}

export default Profile