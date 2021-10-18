
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const PlansBanner = () => {
    return (
        <div className="doctor-banner-bg pb-5" >
            <Container>
                <Row>
                    <Col md={7}>

                        <h1 className="pt-5 text-white fw-bolder fs-1">Our <span className="text-info">Plans</span><br /> </h1>
                        <p className="fs-5 text-white">Discover which Cloudflare plan is correct for your requirements. Find out more about Cloudflare plan pricing and sign up for  here!</p>
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

export default PlansBanner;