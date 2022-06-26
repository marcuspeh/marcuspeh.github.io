import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ContactFrom from '../../components/contactForm/ContactForm'
import ContactInfo from '../../components/contactInfo/ContactInfo'

const Contact: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <ContactInfo />
      </Row>
      <Row>
        <h5>
          Let's start a conversation
        </h5>
        <ContactFrom />
      </Row>
    </Container>
  )
}

export default Contact
