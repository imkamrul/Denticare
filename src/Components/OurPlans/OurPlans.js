import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlansBanner from '../PlansBanner/PlansBanner';
import './OurPlans.css'

const OurPlans = () => {
    return (
        <div>
            <PlansBanner></PlansBanner>
            <Container>
                <Row className="py-5">
                    <Col md={12} className="text-center">
                        <h5 className="mb-0 text-info ">Pricing Packages</h5>
                        <h4 className="fw-bolder fs-3">Choose your best pricing plan</h4>
                    </Col>

                </Row>
                <Row>
                    <Col md={4} className="plan-logo-custom">
                        <h2 className="py-5  text-white text-center " style={{ background: "#081839" }}>Basic Doctory</h2>
                        <p className="plan-logo">  <i class="fas fa-hospital-user"></i></p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurPlans;