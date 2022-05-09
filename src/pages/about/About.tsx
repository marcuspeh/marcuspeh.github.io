import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import EducationInfo from '../../components/educationInfo/EducationInfo';
import ExperienceInfo from '../../components/experienceInfo/ExperienceInfo';
import SkillsInfo from '../../components/skillsInfo/SkillsInfo';

const About: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row className='mb-5'>
        <h2 className='mb-3'>Education</h2>
        <EducationInfo />
      </Row>
      <Row className='mb-5'>
        <h2 className='mb-3'>Skills</h2>
        <SkillsInfo />
      </Row>
      <Row className='mb-5'>
        <h2 className='mb-3'>Experience</h2>
        <ExperienceInfo 
          title='SOFTWARE ENGINEERING INTERN'
          company='GovTech'
          description='Coming soon'
          date='May 2022 - Present'
        />

        <ExperienceInfo 
          title='SOFTWARE ENGINEERING INTERN'
          company='Reluvate Technologies'
          description='Worked on end to end web applications to house AI and Automation solutions. Created backend for solutions for clients such as Savills. Developed Optical character recognition (OCR) to process pdf'
          date='Nov 2021 - Jan 2022'
        />

        <ExperienceInfo 
          title='TEACHING ASSISTANT'
          company='National University of Singapore'
          description='Took charge and led students towards active learning of Computer Science modules. Mentored students by providing apt feedback to queries and assignments.
          Modules taught:
          CS1010X Programming Methodology I (2021 Spring),
          CS2030S Programming Methodology II (2021 Fall),
          CS2040S Data Structures and Algorithms (2022 Spring)'
          date='Jan 2021 - Present'
        />

        <ExperienceInfo 
          title='CODING INSTRUCTOR'
          company='Roboto Coding Academy'
          description="Conducted coding lessons for kids from age of 5 to 15 to ignite interest in coding. Incorporated robots to trigger interest and deepen students' understanding of core coding concept. Taught in prestigious schools such as Victoria School and Chung Cheng High School."
          date='Jul 2020 - Present'
        />

        <ExperienceInfo 
          title='PRODUCT DEVELOPMENT INTERN'
          company='Roboto Coding Academy'
          description='Devised customizable coding curriculum to be taught in schools nationwide. Assimilated video and hands on activities to engage students during lessons. Curated curriculum in Python, Html etc.'
          date='Jan 2020 - Jun 2020'
        />
      </Row>
    </Container>
  );
}

export default About;
