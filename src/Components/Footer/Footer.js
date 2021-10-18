import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Copywrites from './Copywrites';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-custom-color text-white">

            <Container >
                <Row className="py-5 ">
                    <Col md={3} >
                        <h4>Our Services</h4>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> About Us </p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Customer</p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Service</p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Collections</p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Best Seller</p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Careers</p>
                        <p className="mb-0 pb-1"> <span><i className="fas fa-long-arrow-alt-right"></i></span> Privacy Policy</p>
                    </Col>
                    <Col md={6}>
                        <h4 className="text-center">Sign Up To Get Latest Updates</h4>
                        <div className="px-3 mt-4">
                            <InputGroup className="mb-3" size="lg">
                                <FormControl
                                    placeholder="Your email adress"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="info">Subscribe</Button>
                            </InputGroup>
                        </div>
                        <hr className="mt-5" />
                        <h4 className="pt-3 text-center">Follow on socials</h4>
                        <p className="text-center fs-2 ">
                            <i className="fab fa-facebook px-2"></i>
                            <i className="fab fa-twitter px-2"></i>
                            <i className="fab fa-linkedin-in px-2"></i>
                            <i className="fab fa-youtube px-2"></i>
                        </p>
                    </Col>
                    <Col md={3}>
                        <h4 > Opening hours</h4>
                        <p className="d-flex justify-content-between"><span className="text-info">Mon-Tues</span> <span>08:00AM-05:00PM</span></p>
                        <p className="d-flex justify-content-between"><span className="text-info">Wed-Thur</span> <span>09:00AM-06:00PM</span></p>
                        <p className="d-flex justify-content-between"><span className="text-info">Fri-Sat</span> <span>10:00AM-05:00PM</span></p>
                        <p className="d-flex justify-content-between"><span className="text-info">Sunday</span> <span>Emergency Only</span></p>
                        <p className="d-flex justify-content-between"><span className="text-info">Personal</span> <span>Mon-10:00AM</span></p>
                    </Col>
                </Row>

            </Container>
            <hr />





            <Copywrites></Copywrites>
        </div>
    );
};

export default Footer;