import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className='footer bg-dark'>
            <Container className="text-center text-light py-2 d-flex justify-content-center align-items-center">
                <p><span className='text-primary fw-bold'>📑iNote</span> made by <a href='https://github.com/amar-dev1' target='blank' className='fw-bold'>Amar</a></p>
            </Container>
        </Container>
    )
}

export default Footer