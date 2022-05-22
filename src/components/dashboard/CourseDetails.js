import React from 'react'
import { useParams } from 'react-router-dom'
import courses from '../../data/courses'
import { Row, Col, ListGroup } from 'react-bootstrap';

const CourseDetails = () => {
    const { courseid: id } = useParams()
    const i = id - 1
    
  return (
    <div className="">
        <div className="p-3">
            <Row className="p-1 bg-white shadow-sm roundedd">
                <Col md={6}>
                    <p className="font-40 font-500 my-md-4 text-darkblue">Introduction to {courses[i].name}</p>
                    <p className="font-14 text-pink">{courses[i].details.intro}</p>
                </Col>
                <Col md={6} className="mb-4">
                    <p className="font-32 text-blue font-500 my-md-4">Branches</p>
                    <ListGroup>
                        {
                            courses[i].details.branches.map((branch, index) => <ListGroup.Item className="font-14 text-darkblue font-500" key={index}>{branch}</ListGroup.Item>)
                        }
                    </ListGroup>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default CourseDetails