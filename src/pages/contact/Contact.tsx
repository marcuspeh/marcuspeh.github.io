import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import profile from '../../assets/img/profile.jpeg';

import ContactFrom from '../../components/contactForm/ContactForm';

const Contact: React.FC = (): JSX.Element => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Container style={{width:"80%"}}>
        <Row className='mb-4'>
          <Col md={4}>
            <img style={{borderRadius:"50%", width:"100%", padding:"10%"}} src={profile} />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h1>Marcus Peh</h1>
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
        <Row>
          <ContactFrom />
        </Row>
      </Container>
      
    </div>
  );
}

export default Contact;
