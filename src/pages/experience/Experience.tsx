import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ExperienceInfoList from '../../components/experienceInfo/ExperienceInfoList'

const Experience: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row className='mb-5'>
        <h3 className='mb-3 maroon'>Experience</h3>
        <ExperienceInfoList />
      </Row>
    </Container>
  )
}

export default Experience
