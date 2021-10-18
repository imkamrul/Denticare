import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Cirtificates from '../Cirtificates/Cirtificates';

import DoctorBanner from '../DoctorBanner/DoctorBanner';
import DoctocDetails from '../DoctorDetails/DoctocDetails';
import Summary from '../Summary/Summary';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        fetch('https://k17h02.github.io/api/fakedata.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <DoctorBanner></DoctorBanner>
            <Container className="pt-5">
                <h3 className="py-3 fw-bolder">Our Awesome <span className="text-info"> Doctors </span></h3>
                <Row xs={1} md={4} className="g-4 pb-5">
                    {
                        doctors.length ? doctors.map(doctor => <DoctocDetails
                            key={doctor.id}
                            doctor={doctor}></DoctocDetails>)
                            : <Spinner animation="border" variant="primary" />
                    }



                </Row>
                <Cirtificates></Cirtificates>
                <Summary></Summary>
            </Container>

        </div>
    );
};

export default Doctors;