import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

import profile from '../../assets/img/profile.jpeg'

const Landing: React.FC = (): JSX.Element => {
  return (    
    <div className="d-flex flex-column justify-content-center align-items-center" id='landing-animation' style={{height:"80%"}}>
      <Container>
        <Container style={{ padding: '0% 15%'}}>
          <Row>
            <Col md={4} >
              <img style={{borderRadius:"50%", width:"90%", padding:"10% 0%"}} src={profile} />
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <h1>Hey, I’m Marcus👋</h1>
              <p style={{fontSize: "1.2em"}} className="d-none d-md-block d-lg-block d-xl-block d-xxl-block">Code for a better tomorrow!</p>
            </Col>
          </Row>
          <Row>
            <p style={{textAlign:"justify"}}>
            I love writing code. Ever since writing my first program in Python during National Service, I have 
            been obsessed with the idea of using software to solve practical problems. Software engineering 
            is a never-ending puzzle that I am passionately engaged in solving. I believe in the power of 
            programming to transform and improve the lives of people around the world.

            <br />
            <br />

            My specialities include quickly learning new skills and programming languages. I managed to learn 
            enough Ruby on Rails to be able to write new API endpoints within 2 days. I have also managed to 
            speed up API performance in my previous internship by a whopping 200x.
            
            <br />
              
            <Button className="mt-3" variant="secondary" href={'/Marcus_Peh_Resume.pdf'} target="_blank" rel="noopener noreferrer">Download resume</Button>
            </p>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Landing
