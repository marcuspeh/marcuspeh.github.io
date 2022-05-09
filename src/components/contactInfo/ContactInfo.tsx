import React from 'react';
import profile from '../../assets/img/profile.jpeg';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ContactInfo: React.FC = (): JSX.Element => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <img style={{borderRadius:"50%", width:"100%", padding:"10%"}} src={profile} alt='Profile picture :)'/>
                </Col>
                <Col className="d-flex flex-column justify-content-center">
                    <h2>Marcus Peh</h2>
                    <p>Mobile: (+65) 9776 8352<br/>Email: marcuspeh@u.nus.edu</p>
                    <div className='social-icons'>
                        <Button className="social-icon" variant="secondary" href="https://linkedin.com/in/marcuspeh" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </Button>
                        <Button className="social-icon" variant="secondary" href="https://github.com/marcuspeh" target="_blank">
                            <i className="fab fa-github"></i>
                        </Button>
                        <Button className="social-icon" variant="secondary" href="https://instagram.com/marcuspeh_" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </Button>
                        <Button className="social-icon" variant="secondary" href="mailto:hkmpeh@gmail.com" target="_blank">
                            <i className="far fa-envelope"></i>
                        </Button>
                    </div>  
                </Col>
            </Row>
        </Container>
    )
}

export default ContactInfo;
        