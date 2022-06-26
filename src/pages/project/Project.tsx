import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ProjectCardList from '../../components/projectCard/ProjectCardList'

const Project: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <h3 className='maroon'>Featured Projects</h3>
        <p>View more at <a href='https://github.com/marcuspeh'>github.com/marcuspeh</a></p>
      </Row>
      <Row xs={1} md={2} lg={3} className="row justify-content-center">
        <ProjectCardList />
      </Row>
    </Container>
  )
}

export default Project
