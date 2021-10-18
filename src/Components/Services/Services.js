import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="py-5  mt-xs-5">
            <Container id="services">
                <h3 className="py-3 fw-bolder">Commited To <span className="text-info">Excelent Service</span></h3>
                <Row xs={1} md={4} className="g-4">
                    {
                        services.length ? services.map(service => <Service
                            key={service.id}
                            service={service}></Service>)
                            : <Spinner animation="border" variant="primary" />
                    }



                </Row>
            </Container>
        </div>
    );
};

export default Services;