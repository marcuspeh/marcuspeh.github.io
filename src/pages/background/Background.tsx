import React from 'react'
import { Container, Row } from 'react-bootstrap'

import EducationInfo from '../../components/educationInfo/EducationInfo'
import SkillsInfo from '../../components/skillsInfo/SkillsInfo'

const Background: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row className='mb-5'>
        <h3 className='mb-3 maroon'>Education</h3>
        <EducationInfo />
      </Row>
      <Row className='mb-5'>
        <h2 className='mb-3 maroon'>Skills</h2>
        <SkillsInfo />
      </Row>
    </Container>
  )
}

export default Background
