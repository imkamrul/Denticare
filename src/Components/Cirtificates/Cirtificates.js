import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Cirtificates = () => {
    return (
        <Row className="py-5 d-flex justify-content-center align-items-center" >
            <Col md={7}>
                <h5 className="text-info fw-light mb-0">Professionals</h5>
                <h4 className="fw-light">Diplomas and Сertificates of our Doctors</h4>
                <p className="fw-light">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.</p>
            </Col>
            <Col md={5}>


                <Image src="https://image.freepik.com/free-vector/elegant-blue-gold-diploma-certificate-template_1017-17257.jpg" rounded fluid />
            </Col>
        </Row>
    );
};

export default Cirtificates;