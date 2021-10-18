import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="custom-contact-bg-color text-white custom-border">
            <Container>
                <Row>
                    <Col md={4}>
                        <Row className="py-3">
                            <Col md={2}>
                                <i className="fas fa-search-location fs-1  mt-2 text-info"></i>
                            </Col>
                            <Col md={8}>
                                <h5 className="mb-0 fw-lighter">Office Adress</h5>
                                <h4>Uttara,Dhaka</h4>
                            </Col>

                        </Row>
                    </Col>
                    <Col md={4}>
                        <Row className="py-3">
                            <Col md={2}>
                                <i className="fas fa-headset fs-1  mt-2 text-info"></i>
                            </Col>
                            <Col md={8}>
                                <h5 className="mb-0 fw-lighter">24 X 7 online support</h5>
                                <h4>info@denticare.com</h4>
                            </Col>

                        </Row>

                    </Col>
                    <Col md={4}>
                        <Row className="py-3">
                            <Col md={2}>
                                <i className="fas fa-phone-square-alt fs-1  mt-2 text-info"></i>
                            </Col>
                            <Col md={8}>
                                <h5 className="mb-0 fw-lighter">Contact Us Free</h5>
                                <h4>+880123456780</h4>
                            </Col>

                        </Row>

                    </Col>
                </Row>

            </Container>


        </div>
    );
};

export default Contact;