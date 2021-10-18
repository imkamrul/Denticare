import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import img from '../../img/banner.png'

import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-bg" style={{ height: "500px" }}>
            <Container>
                <Row>
                    <Col md={7}>

                        <h1 className="pt-5 text-white fw-bolder fs-1">The World Best <span className="text-info">Dental Specialist</span><br /> Treatment</h1>
                        <p className="fs-5 text-white">Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (development and arrangement of teeth) as well as the oral mucosa, and of adjacent and related structures and tissues, particularly in associated maxillofacial (jaw and facial) area.</p>
                        <Row>
                            <Col md={5}>
                                <Button variant="info" className="text-white fs-4">Book Appointment</Button>
                            </Col>
                            <Col md={5}>
                                <Button variant="primary" className="text-white fs-4">Consult A Dentist</Button>
                            </Col>
                        </Row>


                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default Banner;