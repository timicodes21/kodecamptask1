import React from 'react'
import { Row, Col } from 'react-bootstrap';
import courses from '../../data/courses'
import { SiGoogleclassroom } from 'react-icons/si'
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div className="p-2">
      <Row className="">
        {
          courses.map(course => (
            <Col key={course.id} xs={6} md={3} className="p-2">
              <Link to={`/dashboard/${course.id}`}>
                <div className='p-2 bg-white shadow-sm rounded text-center'> 
                  <div className="mt-3">
                    <SiGoogleclassroom className="course-icon" />
                  </div>
                  <div>
                    <p className="font-20 font-500 text-pink my-5">{course.name}</p>
                  </div>
                </div>
              </Link>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}

export default Courses