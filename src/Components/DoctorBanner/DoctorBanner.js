import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './DoctorBanner.css'

const DoctorBanner = () => {
    return (
        <div className="doctor-banner-bg pb-5" >
            <Container>
                <Row>
                    <Col md={7}>

                        <h1 className="pt-5 text-white fw-bolder fs-1">Our Professional <span className="text-info">Team</span><br /> </h1>
                        <p className="fs-5 text-white">Professional Team means the Employer’s Representative and [INSERT LIST FROM SPICERS] who are appointed by the Developer in connection with the Leisure Centre Construction Works.</p>
                        <Row>
                            <Col md={5} className="">
                                <Button variant="info" as={HashLink} to="/home#booking" className="text-white fs-4">Book Appointment</Button>
                            </Col>

                        </Row>


                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default DoctorBanner;