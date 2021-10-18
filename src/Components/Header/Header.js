import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import logo from '../../img/logo.png'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="bg-light">
            <Container>
                <Row className="">
                    <Col md={6}>
                        <Row >
                            <Col>
                                <p className="mb-0">
                                    <i className="fas fa-phone-volume fs-4"></i>
                                    <span className="fs-3 ps-2 fw-lighter">
                                        01950458001
                                    </span>
                                </p>
                            </Col>
                            <Col>
                                <p className="mb-0">
                                    <i className="fas fa-map-marker-alt fs-4"></i>
                                    <span className="fs-3 ps-2 fw-lighter">
                                        Uttara,Dhaka
                                    </span></p></Col>


                        </Row>
                    </Col>
                    <Col md={6}>
                        <p className="text-end fs-2 mb-0">
                            <i className="fab fa-facebook px-2"></i>
                            <i className="fab fa-twitter px-2"></i>
                            <i className="fab fa-linkedin-in px-2"></i>
                            <i className="fab fa-youtube px-2"></i>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Navbar style={{ background: "#081839" }} expand="md" className="">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src={logo}
                            width="50"
                            height="50"
                            className="d-inline-block align-top mt-0 pt-0"

                        />{' '}
                        <span className=" fs-2 text-info">DentiCare</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto navlink-style">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;