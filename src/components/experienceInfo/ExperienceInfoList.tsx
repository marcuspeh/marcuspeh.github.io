import React from 'react';
import { ExperienceData } from '../../data/experienceData'
import ExperienceInfo from './ExperienceInfo'

const EducationInfoList: React.FC = (): JSX.Element => {
    return (
      	<>
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
            </>
    )
}

export default EducationInfoList
        