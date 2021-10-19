import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Plans = () => {
    return (
        <Container>
            <Row className="pt-5">
                <Col md={12} >


                    <h3 className="py-3 fw-bolder">Choose your best <span className="text-info">pricing plan</span></h3>
                </Col>

            </Row>
            <Row>
                <Col md={4} className="plan-logo-custom">
                    <h2 className="py-5  text-white text-center mb-0" style={{ background: "#081839" }}>Basic Doctory</h2>
                    <p className="plan-logo">  <i className="fas fa-hospital-user"></i></p>
                    <div className="bg-light">
                        <h2 className="p-5 text-center">$29.99 <sub className="fw-light">/month</sub></h2>
                        <p className="text-info text-center fs-5">medical examination,free consultation, recommendations</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Routine checkup</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>24h Assisance</p>
                        <p className="fs-5 text-center"><i className="far fa-times-circle pe-2" style={{ color: "red" }}></i>100 Test & Treatments</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Regular Health Checkups</p>
                        <p className="fs-5 text-center"><i className="far fa-times-circle pe-2" style={{ color: "red" }}></i>Blood Test</p>
                        <div className="text-center py-3">
                            <Button variant="info" className="text-white plan-book-button">Get started Now</Button>
                        </div>
                    </div>

                </Col>
                <Col md={4} className="plan-logo-custom">
                    <h2 className="py-5  text-white text-center mb-0" style={{ background: "#31D2F2" }}>Professional Doctory</h2>
                    <p className="plan-logo">  <i className="fas fa-user-nurse"></i></p>
                    <div className="bg-light">
                        <h2 className="p-5 text-center">$229.99 <sub className="fw-light">/month</sub></h2>
                        <p className="text-info text-center fs-5">medical examination,free consultation, recommendations</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Routine checkup</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>24h Assisance</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>100 Test & Treatments</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Regular Health Checkups</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Blood Test</p>
                        <div className="text-center py-3">
                            <Button variant="info" className="text-white ">Get started Now</Button>
                        </div>
                    </div>

                </Col>
                <Col md={4} className="plan-logo-custom">
                    <h2 className="py-5  text-white text-center mb-0" style={{ background: "#081839" }}>Enterprise Doctery</h2>
                    <p className="plan-logo">  <i className="fas fa-stethoscope"></i></p>
                    <div className="bg-light">
                        <h2 className="p-5 text-center">$99.99 <sub className="fw-light">/month</sub></h2>
                        <p className="text-info text-center fs-5">medical examination,free consultation, recommendations</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Routine checkup</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>24h Assisance</p>
                        <p className="fs-5 text-center"><i className="far fa-times-circle pe-2" style={{ color: "red" }}></i>100 Test & Treatments</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Regular Health Checkups</p>
                        <p className="fs-5 text-center"><i className="far fa-check-circle pe-2" style={{ color: "#081839" }}></i>Blood Test</p>
                        <div className="text-center py-3">
                            <Button variant="info" className="text-white plan-book-button">Get started Now</Button>
                        </div>
                    </div>

                </Col>
            </Row>

        </Container>
    );
};

export default Plans;