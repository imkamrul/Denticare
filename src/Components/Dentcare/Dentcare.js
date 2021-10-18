import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Dentcare = (props) => {
    const { img, tittle, info } = props.info;


    return (
        <Col md={3}>
            <Row>
                <Col md={3} className="pt-2">
                    <Image src={img} rounded />
                </Col>
                <Col md={9} className="pt-2">
                    <h4 className="fw-light">{tittle}</h4>
                    <p className="fw-light">{info}</p>
                </Col>
            </Row>
        </Col>
    );
};

export default Dentcare;