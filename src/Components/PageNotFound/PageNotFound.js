import React from 'react';
import { Container, Image } from 'react-bootstrap';
import pageNotFound from '../../img/pagenotfound.jpg'

const PageNotFound = () => {
    return (
        <Container>
            <Image src={pageNotFound} rounded fluid />
        </Container>
    );
};

export default PageNotFound;