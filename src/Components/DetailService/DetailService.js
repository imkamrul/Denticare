import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DetailService = () => {
    let { id } = useParams();
    const [services, setServices] = useState([]);
    console.log(id)

    useEffect(() => {
        fetch('https://k17h02.github.io/api/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const result = services.find(service => service.id === id)
    console.log(result)
    return (
        <div className="bg-light">

            <Container>
                <Row >

                    <Col md={6}>
                        <h1 className="pt-5 text-info fw-bolder fs-1">{result?.title}</h1>
                        <p className="fs-5">{result?.info}</p>
                        <Row>
                            <Col md={6}>
                                <Button variant="info" className="text-white fs-4">Book Appointment</Button>
                            </Col>
                            <Col md={6}>
                                <Button variant="primary" className="text-white fs-4">Consult A Dentist</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}> <Image src={result?.serviceIMG} fluid className="shadow" /></Col>
                </Row>
                <Row className="py-5">

                    <Col md={5} className="px-5">
                        <Card>
                            <Card.Img variant="top" src={result?.doctorImg} />
                            <Card.Body>
                                <Card.Title>{result?.doctorName}</Card.Title>
                                <Card.Text>
                                    Specialist at <span className="text-info">{result?.title}</span>
                                </Card.Text>
                            </Card.Body>
                            <p className="mb-0 fs-3"><i class="fas fa-envelope-square px-2"></i>info@rmail.com</p>
                            <p className="mb-0 fs-3"><i class="fas fa-phone px-2"></i>019503343</p>

                        </Card>
                    </Col>
                    <Col md={7}>
                        <h1 className="fw-light">Comprehansive & individual care for all patients</h1>
                        <p className="fw-light">The practice of continuing comprehensive care is the concurrent prevention and management of multiple physical and emotional health problems of a patient over a period of time in relationship to family, life events and environment.</p>
                        <Row>
                            <Col md={6}>
                                <p className="fs-5"><i class="fas fa-caret-right text-info pe-2"></i>Route and medical care</p>
                            </Col>
                            <Col md={6}>
                                <p className="fs-5"><i class="fas fa-caret-right text-info pe-2"></i>Excellence in Health care every</p>
                            </Col>
                            <Col md={6}>
                                <p className="fs-5"><i class="fas fa-caret-right text-info pe-2"></i>Routine and medical care</p>
                            </Col>
                            <Col md={6}>
                                <p className="fs-5"><i class="fas fa-caret-right text-info pe-2"></i>Building a healthy environment.</p>
                            </Col>
                            <Col md={12} className="d-flex justify-content-center py-3">
                                <Button variant="info" className="text-white fs-5">Book Appointment</Button>
                            </Col>

                        </Row>


                    </Col>

                </Row>
            </Container>

        </div>
    );
};

export default DetailService;