import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const News = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <p className="mb-0">Keeping You well.</p>
                        <h3>Stories, Tips & Latest News</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default News;