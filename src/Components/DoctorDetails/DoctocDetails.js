import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './DoctorDetails.css'

const DoctocDetails = (props) => {
    console.log(props)
    const { doctorName, doctorImg, title, logo } = props.doctor
    return (
        <Col>
            <Card className="service-box">
                <Card.Img variant="top" src={doctorImg} style={{ height: "240px " }} className="custom-doctor-style" />
                <Card.Body>
                    <Card.Title className="fs-3 text-center">{doctorName}</Card.Title>

                    <Card.Text>
                        <p className="fw-3 text-center"><span className="text-info">{title} (<i class={logo}></i>)</span> specialist</p>


                    </Card.Text>
                    <p className="fs-4 mb-0 social-link text-center">
                        <i class="fab fa-youtube mx-2"></i>
                        <i class="fab fa-twitter mx-2"></i>

                        <i class="fab fa-facebook-square mx-2"></i>
                    </p>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default DoctocDetails;