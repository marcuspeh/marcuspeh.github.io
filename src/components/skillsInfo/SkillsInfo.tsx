import React from 'react'

import { SkillsData } from '../../data/skillsData'

const SkillsInfo: React.FC = (): JSX.Element => {
  return (
    <div>
      {
        SkillsData.map((skills) => {
          return <>
          <h4 className='mb-1'>{skills.header}</h4>
          <p>{skills.skills}</p>
          </>
        })
      }
    </div>
  )
}

export default SkillsInfo
