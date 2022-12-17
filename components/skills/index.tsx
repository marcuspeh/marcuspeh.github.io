import React from 'react'

import { SkillsData } from '../../data/skillsData'

const Skills: React.FC = (): JSX.Element => {
  return (
    <div>
      {
        SkillsData.map((skills) => {
          return <>
          <p style={{marginBottom: "0"}}><b>{skills.header}</b></p>
          <p style={{marginTop: "0"}}>{skills.skills}</p>
          </>
        })
      }
    </div>
  )
}

export default Skills
    