import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Footer.css'

const Copywrites = () => {
    return (
        <div>
            <Container>
                <Row className="pt-3 pb-3">
                    <Col xs md={12} className="text-center"> <p>Copyright <i className="fas fa-copyright text-info"></i> 2021 DentiCare All Rights Reserved.</p></Col>
                    {/* <Col xs md={6} className="text-md-end footer-link-customize ">
                        <Link as={HashLink} to="/home#home">Home</Link>

                        <Link as={HashLink} to="/home#services">Service</Link>
                        <Link to='/doctors'>Our Doctors</Link>
                        <Link to='/ourplans'>Our Plans</Link>
                        <Link as={HashLink} to="/home#contact">Contact</Link>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Copywrites;