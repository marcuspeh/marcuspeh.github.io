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
                title={experience.title[0]}
                company={experience.company[0]}
                description={experience.description[0]}
                date={experience.date[0]}
                listsHeader={experience.listHeader[0]}
                lists={experience.listContent}
              />
            } else {
              return <ExperienceInfo 
                title={experience.title[0]}
                company={experience.company[0]}
                description={experience.description[0]}
                date={experience.date[0]}
              />
            }
          })
        }
      </Row>
    </Container>
  );
}

export default Experience;
