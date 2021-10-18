import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Copywrites = () => {
    return (
        <div>
            <Container>
                <Row className="pt-3 pb-3">
                    <Col xs md={6}> <p>Copyright <i className="fas fa-copyright"></i> 2021 DentiCare All Rights Reserved.</p></Col>
                    <Col xs md={6} className="text-md-end footer-link-customize ">
                        <Link to="/">Home</Link>
                        <Link to="/">About Us</Link>
                        <Link to="/">Service</Link>
                        <Link to="/">Blog</Link>
                        <Link to="/">Contact</Link></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Copywrites;