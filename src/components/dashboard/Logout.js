import React from 'react'
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()

  const handleLogout = (e) => {
    navigate('/')
  }

  const handleCancel = () => {
    navigate('/dashboard/home')
  }

  return (
    <div className="">
      <div className="p-3">
          <Row className="py-5 bg-white shadow-sm rounded">
            <div>
              <p className="font-18 fw-bold text-darkblue">Are you sure you want to Logout?</p>
            </div>
            <div>
              <button type='submit' onClick={(e) => handleLogout(e)} className='bg-danger fw-bold login-button shadow mb-3 py-2 px-5 text-white'>Yes</button>
              <div>
                <button onClick={handleCancel} className='bg-success fw-bold login-button shadow mb-3 py-2 px-5 text-white'>No</button>
              </div>
            </div>
          </Row>
      </div>
    </div>
  )
}

export default Logout