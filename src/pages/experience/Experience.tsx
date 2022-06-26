import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { ExperienceData } from '../../data/experienceData'

import ExperienceInfo from '../../components/experienceInfo/ExperienceInfo';

const Experience: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row className='mb-5'>
        <h3 className='mb-3 maroon'>Experience</h3>
        {
          ExperienceData.map((experience) => {
            if (experience.listHeader && experience.listContent && experience.listContent.length > 0) {
              return <ExperienceInfo 
                title={experience.title}
                company={experience.company}
                description={experience.description}
                date={experience.date}
                listsHeader={experience.listHeader}
                lists={experience.listContent}
              />
            } else {
              return <ExperienceInfo 
                title={experience.title}
                company={experience.company}
                description={experience.description}
                date={experience.date}
              />
            }
          })
        }
      </Row>
    </Container>
  );
}

export default Experience;
