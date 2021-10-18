import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    let history = useHistory();
    const handledetails = (id) => {
        history.push(`/detailsservice/${id}`);
    }
    const { title, info, logo, serviceIMG, id } = props.service

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={serviceIMG} style={{ height: "240px " }} className="custom-service-style" />
                <Card.Body>
                    <Card.Title className="fs-3">{title}</Card.Title>
                    <p className="service-logo"> <img src={logo} alt="" /></p>
                    <Card.Text>

                        {info.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
                <p className="mx-auto"> <Button variant="info" className="text-white fs-5" onClick={() => handledetails(id)}>View Details</Button></p>
            </Card>
        </Col>
    );
};

export default Service;