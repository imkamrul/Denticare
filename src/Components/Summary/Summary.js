import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Summary = () => {
    return (


        <Row className="py-5 bg-light rounded my-5">
            <Col md={3} className="text-center">
                <h2 className="text-info fw-bolder mb-0">9800<sup>+</sup> </h2>
                <h3 >Happy Patients</h3>
                <p className="fw-light">Over the success critical patients surgery in the clinic</p>
            </Col>
            <Col md={3} className="text-center">
                <h2 className="text-info fw-bolder mb-0">90<sup>+</sup> </h2>
                <h3>Expert Doctors</h3>
                <p className="fw-light">The medical professional doctors available in the clinic</p>
            </Col>
            <Col md={3} className="text-center">
                <h2 className="text-info fw-bolder mb-0">420<sup>+</sup> </h2>
                <h3>Health Departments</h3>
                <p className="fw-light">Total health departments available in our medical clinic</p>
            </Col>
            <Col md={3} className="text-center">
                <h2 className="text-info fw-bolder mb-0">2250<sup>+</sup> </h2>
                <h3>Total Branches</h3>
                <p className="fw-light">Total medical branches available in over the world</p>
            </Col>

        </Row>

    );
};

export default Summary;